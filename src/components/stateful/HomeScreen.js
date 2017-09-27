import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HomeScreen extends Component {
  static navigationOptions = () => ({
    title: 'Home'
  })
  render () {
    return (
      <View style={styles.container}>
        <Text>Open up HomeScreen.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
