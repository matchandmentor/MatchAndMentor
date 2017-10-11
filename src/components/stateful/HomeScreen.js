import React, { Component } from 'react';
import { Text, View } from 'react-native';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default class HomeScreen extends Component {
  static navigationOptions() {
    return ({
      title: 'Home',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Match And Mentor</Text>
        <Text>Open up HomeScreen.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
