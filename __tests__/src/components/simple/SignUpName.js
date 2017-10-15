/* eslint-env jest */
'use strict'
import { Keyboard } from 'react-native'
import React from 'react'
import SignUpName from '../../../../src/components/simple/SignUpName'
import renderer from 'react-test-renderer'
import { findById } from '../../../../setupTests'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyAsjC_abpWmFCYmNoQl257nc807hHE_gsY',
  authDomain: 'matchandmentorapp.firebaseapp.com',
  databaseURL: 'https://matchandmentorapp.firebaseio.com',
  projectId: 'matchandmentorapp',
  storageBucket: 'matchandmentorapp.appspot.com',
  messagingSenderId: '1068797055216'
})

jest.mock('TouchableOpacity', () => {
  const mockComponent = require('jest-react-native')
  return mockComponent('TouchableHighlight')
})

jest.mock('Keyboard', () => {
  return {
    dismiss: jest.fn(),
    addListener: jest.fn()
  }
})

const tree = renderer.create(<SignUpName dispatch={jest.fn()} name='test' />)

it('renders correctly', () => {
  expect(tree).toMatchSnapshot()
})

it('calls submit on button press', () => {
  const submitButton = findById(tree.toJSON(), 'name-submit-button')
  submitButton.props.onPress()
  expect(Keyboard.dismiss).toBeCalled()
})

it('calls dispatch on change text', () => {
  const nameInput = findById(tree.toJSON(), 'name-input')
  nameInput.props.onChangeText()
  expect(tree.toTree().props.dispatch).toBeCalled()
})
