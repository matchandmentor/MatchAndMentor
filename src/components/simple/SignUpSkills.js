import React from 'react';
import { Text, View, TextInput, Keyboard, Platform } from 'react-native';
import Button from './Button';
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
      <View>
        <Button
          style={styles.buttonStyle}
          title="Save skill"
          onPress={() => props.dispatch(updateSkill(props.skill))}>
          <Text style={styles.textStyle}>Save skill</Text>
        </Button>
      </View>
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        />
        <View style={{ flexDirection: 'row' }}>
          {props.skills.map(skill => (
            <Button
              key={skill.name}
              style={{
                ...styles.buttonStyle,
                margin: 10,
                flex: 0.5,
                backgroundColor: '#333333',
              }}
              title="Save skill"
              onPress={() => null}>
              <Text style={{ ...styles.textStyle, fontSize: 16 }}>
                {skill.name} {skill.proficiency}
              </Text>
            </Button>
          ))}
        </View>
      </View>
      <View>
        <Button
          style={styles.buttonStyle}
          title="Save skill"
          onPress={() => props.dispatch(updateSkill(props.skill))}>
          <Text style={styles.textStyle}>Save skill</Text>
        </Button>
      </View>
    </View>
  );
};

export default SignUpSkills;
