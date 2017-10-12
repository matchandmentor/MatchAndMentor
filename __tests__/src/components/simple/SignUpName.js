/* eslint-env jest */
'use strict'
import { Keyboard } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import SignUpName from '../../../../src/components/simple/SignUpName'
import renderer from 'react-test-renderer'
import store from '../../../../src/reducers/store'
import { findById } from '../../../../setupTests'

jest.mock('TouchableOpacity', () => {
  const mockComponent = require('jest-react-native')
  return mockComponent('TouchableHighlight')
})

jest.mock('Keyboard', () => {
  return { dismiss: jest.fn() }
})

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}><SignUpName /></Provider>
  )
  expect(tree).toMatchSnapshot()
})

it('calls submit on button press', () => {
  let tree = renderer.create(<Provider store={store}><SignUpName /></Provider>).toJSON()
  const submitButton = findById(tree, 'name-submit-button')
  submitButton.props.onPress()
  expect(Keyboard.dismiss).toBeCalled()
})
