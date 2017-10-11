import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function Button({ onPress, children }) {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.shape({}).isRequired,
};

export default Button;
