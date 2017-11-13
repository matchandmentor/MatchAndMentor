import React from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Button from './Button';
import ScreenHeader from './ScreenHeader';
import { updateBirthday, submitBirthday } from '../../actions';

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
  pickerStyle: {
    dateInput: {
      marginTop: 20,
      marginLeft: 20,
      height: 50,
      borderWidth: 0,
      alignItems: 'flex-start',
      padding: 20,
    },
    placeholderText: {
      fontSize: 24,
      fontFamily: 'Montserrat-Regular',
    },
    dateText: {
      fontSize: 24,
      fontFamily: 'Montserrat-Regular',
    },
  },
  barStyle: {
    height: 1,
    backgroundColor: 'black',
    margin: 20,
  },
};

function submit(birthday, dispatch) {
  dispatch(submitBirthday(birthday));
}
function SignUpBirthday(props) {
  const maxDate = new Date();
  const minDate = new Date(
    maxDate.getFullYear() - 100,
    maxDate.getMonth(),
    maxDate.getDay()
  );
  return (
    <View style={styles.container}>
      <View>
        <ScreenHeader title={props.title} />
        <DatePicker
          style={{ width: '100%' }}
          date={props.birthday}
          mode="date"
          placeholder="select date"
          format="MM/DD/YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={date => props.dispatch(updateBirthday(date))}
          customStyles={styles.pickerStyle}
          maxDate={maxDate}
          minDate={minDate}
          showIcon={false}
        />
        <View style={styles.barStyle} />
      </View>
      <View>
        <Button
          style={
            props.birthday !== null && props.birthday !== ''
              ? styles.buttonStyle
              : { ...styles.buttonStyle, backgroundColor: '#e9e9e9' }
          }
          onPress={() => submit(props.birthday, props.dispatch)}
          disabled={props.birthday === null || props.birthday === ''}
          testID="birthday-submit-button">
          <Text style={styles.textStyle}>Continue</Text>
        </Button>
      </View>
    </View>
  );
}

export default SignUpBirthday;
