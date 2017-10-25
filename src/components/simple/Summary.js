import React from 'react';
import { View, Text, Platform, TextInput, Keyboard } from 'react-native';
import Button from './Button';
import {
  updateMentorSummary,
  submitMentorSummary,
  updateMenteeSummary,
  submitMenteeSummary,
} from '../../actions';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 20,
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
  headerText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Montserrat-Light',
  },
  inputStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
    margin: 20,
    fontSize: 24,
    fontFamily: 'Montserrat-Light',
    height: '50%',
    backgroundColor: '#e9e9e9',
    padding: 10,
  },
};

function submit(dispatch, isMentor, value, loadMenteeScreenNext, menteeOnly) {
  Keyboard.dismiss();
  if (isMentor) {
    dispatch(submitMentorSummary(value, loadMenteeScreenNext));
  } else {
    dispatch(submitMenteeSummary(value, menteeOnly));
  }
}

function onChangeText(props, value) {
  if (props.isMentor) {
    props.dispatch(updateMentorSummary(value));
  } else {
    props.dispatch(updateMenteeSummary(value));
  }
}

function Summary(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>{props.headerText}</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={value => onChangeText(props, value)}
          maxLength={500}
          multiline
          onSubmitEditing={Keyboard.dismiss}
          onEndEditing={Keyboard.dismiss}
          testID="sum-input"
        />
      </View>
      <View>
        {props.isMentor ? (
          <Button
            style={
              props.mentorSummary !== ''
                ? styles.buttonStyle
                : { ...styles.buttonStyle, backgroundColor: '#e9e9e9' }
            }
            onPress={() =>
              submit(
                props.dispatch,
                props.isMentor,
                props.mentorSummary,
                props.loadMenteeScreenNext
              )}
            disabled={props.mentorSummary === ''}
            testID="sum-submit-button">
            <Text style={styles.textStyle}>Continue</Text>
          </Button>
        ) : (
          <Button
            style={
              props.menteeSummary !== ''
                ? styles.buttonStyle
                : { ...styles.buttonStyle, backgroundColor: '#e9e9e9' }
            }
            onPress={() =>
              submit(
                props.dispatch,
                props.isMentor,
                props.menteeSummary,
                null,
                props.menteeOnly
              )}
            disabled={props.menteeSummary === ''}
            testID="sum-submit-button">
            <Text style={styles.textStyle}>Continue</Text>
          </Button>
        )}
      </View>
    </View>
  );
}

export default Summary;
