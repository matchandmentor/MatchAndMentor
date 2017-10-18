import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TagInput from 'react-native-tag-input';

export default class SkillScreen extends Component {
  state = {
    skills: [],
  };

  onChangeTags = skills => {
    this.setState({
      skills,
    });
  };

  labelExtractor = skill => skill;

  render() {
    const inputProps = {
      keyboardType: 'default',
      placeholder: 'ex: React',
      autoFocus: true,
    };

    return (
      <View style={{ flex: 1, margin: 10, marginTop: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Skills: </Text>
          <TagInput
            value={this.state.skills}
            onChange={this.onChangeTags}
            labelExtractor={this.labelExtractor}
            tagColor="blue"
            tagTextColor="white"
            inputProps={inputProps}
            maxHeight={75}
          />
        </View>
      </View>
    );
  }
}
