import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  containerStyle: {
    margin: 20,
  },
  textStyle: {
    fontSize: 28,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
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
