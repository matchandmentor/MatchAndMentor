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
    dateIcon: {
      position: 'absolute',
      left: 0,
      top: 4,
      marginLeft: 20,
    },
    dateInput: {
      marginLeft: 56,
    },
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
          style={{ width: '50%' }}
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
        />
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
