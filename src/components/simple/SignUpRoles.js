import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from './Button';
import ScreenHeader from './ScreenHeader';
import { submitRoles, updateMentorRole, updateMenteeRole } from '../../actions';
import { ROLES } from '../../actions/types';

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
  roleStyle: {
    backgroundColor: '#e9e9e9',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  roleTextStyle: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Montserrat-Regular',
    marginLeft: 20,
  },
};

function submit(props) {
  if (props.mentorSelected && props.menteeSelected) {
    props.dispatch(submitRoles(ROLES.MENTOR_AND_MENTEE)); // both mentor and mentee
  } else if (props.mentorSelected) {
    props.dispatch(submitRoles(ROLES.MENTOR)); // mentor only
  } else {
    props.dispatch(submitRoles(ROLES.MENTEE)); // mentee only
  }
}

function SignUpRoles(props) {
  return (
    <View style={styles.container}>
      <View>
        <ScreenHeader title="Your Roles" />
        <Button style={
          props.mentorSelected
            ? { ...styles.roleStyle, backgroundColor: '#55A838' }
            : styles.roleStyle
          }
          onPress={() => props.dispatch(updateMentorRole(!props.mentorSelected))}
          testID="mentor-button">
          <Text style={styles.roleTextStyle}>Mentor</Text>
          <Icon name="check-circle-o" size={30} color='black' />
        </Button>
        <Button style={
          props.menteeSelected
            ? { ...styles.roleStyle, backgroundColor: '#55A838' }
            : styles.roleStyle
          }
          onPress={() => props.dispatch(updateMenteeRole(!props.menteeSelected))}
          testID="mentee-button">
          <Text style={styles.roleTextStyle}>Mentee</Text>
          <Icon name="check-circle-o" size={30} color='black' />
        </Button>
      </View>
      <View>
        <Button
          style={
            (props.mentorSelected || props.menteeSelected)
              ? styles.buttonStyle
              : { ...styles.buttonStyle, backgroundColor: '#e9e9e9' }
          }
          onPress={() => submit(props)}
          disabled={!props.mentorSelected && !props.menteeSelected}
          testID="roles-submit-button">
          <Text style={styles.textStyle}>Continue</Text>
        </Button>
      </View>
    </View>
  );
}

export default SignUpRoles;
