import React from 'react'
import { TouchableOpacity } from 'react-native'

function Button ({onPress, children, style, disabled, testID}) {
  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled} testID={testID}>
      {children}
    </TouchableOpacity>
  )
}

export default Button
