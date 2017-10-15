import React from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Button from './Button';
import ScreenHeader from './ScreenHeader';
import { submitName, updateName } from '../../actions';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    backgroundColor: '#55A838',
    margin: 20,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: 'Montserrat-Regular',
  },
  inputStyle: {
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
    margin: 20,
  },
};

function submit(name, dispatch) {
  Keyboard.dismiss();
  dispatch(submitName(name));
}
function SignUpName(props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
          <ScreenHeader title={props.title} />
          <TextInput
            style={styles.inputStyle}
            onChangeText={value => props.dispatch(updateName(value))}
            maxLength={100}
            onSubmitEditing={Keyboard.dismiss}
            onEndEditing={Keyboard.dismiss}
            testID="name-input"
          />
        </View>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={64}>
          <Button
            style={
              props.name !== null && props.name !== ''
                ? styles.buttonStyle
                : { ...styles.buttonStyle, backgroundColor: '#e9e9e9' }
            }
            onPress={() => submit(props.name, props.dispatch)}
            disabled={props.name === null || props.name === ''}
            testID="name-submit-button">
            <Text style={styles.textStyle}>Continue</Text>
          </Button>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SignUpName;
