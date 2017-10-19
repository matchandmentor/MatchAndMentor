import React from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';

const SkillScreen = (props) => (
  <View>
    <Button title='go to summary' onPress={() => props.navigation.navigate('SummaryScreen')} />
  </View>
);

export default connect()(SkillScreen);
