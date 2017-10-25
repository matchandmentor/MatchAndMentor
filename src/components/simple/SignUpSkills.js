import React from 'react';
import { Text, View, TextInput, Keyboard, Platform } from 'react-native';
import Button from './Button';
import ScreenHeader from './ScreenHeader';
import { updateSkillName, setProficiencyAndSaveSkill, submitSkills } from '../../actions';

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
  skillButtonStyle: {
    backgroundColor: '#333333',
    margin: 5,
    padding: 10,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  skillButtonTextStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
};

const SkillProficiencyBadge = props => (
  <View
    style={{
      width: 30,
      height: 30,
      backgroundColor: '#ffffff',
      borderRadius: 30,
      justifyContent: 'center',
      marginLeft: 10,
    }}>
    <Text
      style={{
        textColor: '#000000',
        alignSelf: 'center',
      }}>
      {props.proficiency}
    </Text>
  </View>
);

const SkillButton = props => (
  <Button style={styles.skillButtonStyle}>
    <Text style={styles.skillButtonTextStyle}>{props.name}</Text>
    <SkillProficiencyBadge proficiency={props.proficiency} />
  </Button>
);

const ProficiencyButton = props => (
  <Button
    title={props.proficiency}
    onPress={props.dispatch}
    style={{ ...styles.buttonStyle, flex: 0.2 }}>
    <Text style={styles.textStyle}>{props.proficiency}</Text>
  </Button>
);

const SignUpSkills = props => {
  const proficiencyLevels = ['1', '2', '3', '4', '5'];
  return (
    <View style={styles.container}>
      <View>
        <ScreenHeader title={props.title} />
        <TextInput
          editable
          style={styles.inputStyle}
          maxLength={100}
          onChangeText={skillName => props.dispatch(updateSkillName(skillName))}
          onSubmitEditing={Keyboard.dismiss}
          onEndEditing={Keyboard.dismiss}
          placeholder={'Ex: JavaScript'}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        />
        <View style={{ flexDirection: 'row' }}>
          {proficiencyLevels.map(level => (
            <ProficiencyButton
              key={level}
              proficiency={level}
              dispatch={() => props.dispatch(updateSkillProficiency(level))}
            />
          ))}
        </View>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {props.skills.map(skill => (
          <SkillButton
            key={skill.name}
            name={skill.name}
            proficiency={skill.proficiency}
          />
        ))}
      </View>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={64}>
        <Button
          style={
            props.skills !== null && props.skills.length > 0
              ? styles.buttonStyle
              : { ...styles.buttonStyle, backgroundColor: '#e9e9e9' }
          }
          onPress={() => props.dispatch(submitSkills())}
          disabled={props.name === null || props.name === ''}
          testID="name-submit-button">
          <Text style={styles.textStyle}>Continue</Text>
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUpSkills;
