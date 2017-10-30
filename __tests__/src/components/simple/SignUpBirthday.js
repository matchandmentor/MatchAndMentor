/* eslint-env jest */
'use strict'
import 'react-native'
import React from 'react'
import SignUpBirthday from '../../../../src/components/simple/SignUpBirthday'
import renderer from 'react-test-renderer'
import { findById } from '../../../../setupTests'
import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAsjC_abpWmFCYmNoQl257nc807hHE_gsY',
    authDomain: 'matchandmentorapp.firebaseapp.com',
    databaseURL: 'https://matchandmentorapp.firebaseio.com',
    projectId: 'matchandmentorapp',
    storageBucket: 'matchandmentorapp.appspot.com',
    messagingSenderId: '1068797055216'
  })
}

jest.mock('TouchableOpacity', () => {
  const mockComponent = require('jest-react-native')
  return mockComponent('TouchableHighlight')
})

const dispatch = jest.fn()
const tree = renderer.create(<SignUpBirthday dispatch={dispatch} birthday='01/01/2000' title='Your Birthday' />)

it('renders correctly', () => {
  expect(tree).toMatchSnapshot()
})

it('calls submit on button press', () => {
  const submitButton = findById(tree.toJSON(), 'birthday-submit-button')
  submitButton.props.onPress()
  expect(dispatch).toBeCalled()
})
