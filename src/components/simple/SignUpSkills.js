import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  Platform,
} from 'react-native';
import ScreenHeader from './ScreenHeader';
import {
  updateSkillProficiency,
  updateSkillName,
  updateSkill,
} from '../../actions';

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

const ProficiencyButton = props => (
  <Button
    title={props.proficiency}
    onPress={props.dispatch}
    style={{
      flex: 0.2,
      borderWidth: 1,
      height: 50,
      backgroundColor: 'powderblue',
    }}
  />
);

const SignUpSkills = props => {
  const proficiencyLevels = ['1', '2', '3', '4', '5'];
  return (
    // done: add skill
    // todo: as a new user, I want to click a skill I've added to edit it
    // todo: as a new user, I want to remove a skill I've added
    // todo: disable proficiency if no skill
    // todo: style
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
        <View style={{ flexDirection: 'column' }}>
          {proficiencyLevels.map(level => (
            <ProficiencyButton
              key={level}
              proficiency={level}
              dispatch={() => props.dispatch(updateSkillProficiency(level))}
            />
          ))}
        </View>
        <View>
          <Button
            title="Save skill"
            onPress={() => props.dispatch(updateSkill(props.skill))}
          />
        </View>
        <View>
          {props.skills.map(skill => (
            <Text key={skill.name}>
              {skill.name} {skill.proficiency}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SignUpSkills;
