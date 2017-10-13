import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function Button ({onPress, children, style, disabled, testID}) {
  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled} testID={testID}>
      {children}
    </TouchableOpacity>
  )
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Button;
