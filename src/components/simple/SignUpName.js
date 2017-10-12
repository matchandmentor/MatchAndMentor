import React from 'react'
import { View, Text, TextInput, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import Button from './Button'
import ScreenHeader from './ScreenHeader'
import { reduxForm, Field } from 'redux-form'
import { submitName } from '../../actions'
import store from '../../reducers/store'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  buttonStyle: {
    backgroundColor: '#55A838',
    margin: 20,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 24
  },
  inputStyle: {
    height: 40,
    bottomBorderColor: 'black',
    bottomBorderWidth: 1,
    margin: 20
  }
}

function submit (values) {
  Keyboard.dismiss()
  if (!values.name) {
    Alert.alert('Submission Error', 'You must enter your name', [{text: 'OK', onPress: () => console.log('OK Pressed')}], { cancelable: false })
  } else {
    store.dispatch(submitName(values.name))
  }
}
function renderInput ({ input: { onChange, ...restInput }, meta: { error } }) {
  return <TextInput style={styles.inputStyle} onChangeText={onChange} {...restInput} maxLength={100}
    onSubmitEditing={Keyboard.dismiss} onEndEditing={Keyboard.dismiss} />
}
function SignUpName (props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
          <ScreenHeader title='Your Name' />
          <Field name='name' component={renderInput} />
        </View>
        <View>
          <Button style={styles.buttonStyle} onPress={props.handleSubmit(submit)} testID='name-submit-button'>
            <Text style={styles.textStyle}>Continue</Text>
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default reduxForm({ form: 'name' })(SignUpName)
