import React from 'react'
import { TouchableOpacity } from 'react-native'

function Button ({onPress, children, style, testID}) {
  return (
    <TouchableOpacity onPress={onPress} style={style} testID={testID}>
      {children}
    </TouchableOpacity>
  )
}

export default Button
