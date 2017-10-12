import React from 'react'
import { View, Text } from 'react-native'

function ScreenHeader ({title}) {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  )
}

const styles = {
  containerStyle: {
    margin: 20
  },
  textStyle: {
    fontSize: 24,
    color: 'black'
  }
}

export default ScreenHeader
