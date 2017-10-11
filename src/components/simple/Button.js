import React from 'react';
import { TouchableOpacity } from 'react-native';

function Button({ onPress, children }) {
  return (
    <TouchableOpacity onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

export default Button;
