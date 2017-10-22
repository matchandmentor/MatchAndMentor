import React, { Component } from 'react';
import { Text, View, TextInput, Button, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { submitName, updateSkillName } from '../../actions';
import { updateSkillProficiency } from '../../actions/UserActions';

const ProficiencyButton = props => {
  return <Button title={props.proficiency} onPress={props.dispatch} />;
};

class SkillScreen extends Component {
  render() {
    const proficiencyLevels = ['1', '2', '3', '4', '5'];
    return (
      <View>
        <Text>Enter a few skills. You can edit these later.</Text>
        <TextInput
          editable
          maxLength={100}
          onChangeText={skillName =>
            this.props.dispatch(updateSkillName(skillName))}
          onSubmitEditing={Keyboard.dismiss}
          onEndEditing={Keyboard.dismiss}
          placeholder={'Ex: JavaScript'}
        />
        <Text>Select your proficiency</Text>
        <View>
          {proficiencyLevels.map(level => (
            <ProficiencyButton
              key={level}
              proficiency={level}
              dispatch={() =>
                this.props.dispatch(updateSkillProficiency(level))}
            />
          ))}
          {this.props.user.skills.map(skill => (
            <Text key={skill.name}>
              {skill.name} {skill.proficiency}
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(SkillScreen);
