import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  containerStyle: {
    margin: 20,
  },
  textStyle: {
    fontSize: 24,
    color: 'black',
  },
};

function ScreenHeader({ title }) {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
}

export default ScreenHeader;
