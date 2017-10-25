/* eslint-env jest */
'use strict'
import React from 'react'
import SignUpRoles from '../../../../src/components/simple/SignUpRoles'
import renderer from 'react-test-renderer'
import { findById } from '../../../../setupTests'

jest.mock('TouchableOpacity', () => {
  const mockComponent = require('jest-react-native')
  return mockComponent('TouchableHighlight')
})

it('renders correctly', () => {
  const tree = renderer.create(<SignUpRoles dispatch={jest.fn()} title='Your Role' roles={null} mentorSelected={false} menteeSelected={false} />)
  expect(tree).toMatchSnapshot()
})

it('calls submit on button press with mentor selected', () => {
  const tree = renderer.create(<SignUpRoles dispatch={jest.fn()} title='Your Role' roles={null} mentorSelected={true} menteeSelected={false} />)
  const submitButton = findById(tree.toJSON(), 'roles-submit-button')
  submitButton.props.onPress()
  expect(tree.toTree().props.dispatch).toBeCalled()
})

it('calls submit on button press with mentee selected', () => {
  const tree = renderer.create(<SignUpRoles dispatch={jest.fn()} title='Your Role' roles={null} mentorSelected={false} menteeSelected={true} />)
  const submitButton = findById(tree.toJSON(), 'roles-submit-button')
  submitButton.props.onPress()
  expect(tree.toTree().props.dispatch).toBeCalled()
})

it('calls submit on button press with mentor and mentee selected', () => {
  const tree = renderer.create(<SignUpRoles dispatch={jest.fn()} title='Your Role' roles={null} mentorSelected={true} menteeSelected={true} />)
  const submitButton = findById(tree.toJSON(), 'roles-submit-button')
  submitButton.props.onPress()
  expect(tree.toTree().props.dispatch).toBeCalled()
})

it('calls updateMentorRole on button press', () => {
  const tree = renderer.create(<SignUpRoles dispatch={jest.fn()} title='Your Role' roles={null} mentorSelected={true} menteeSelected={false} />)
  const submitButton = findById(tree.toJSON(), 'mentor-button')
  submitButton.props.onPress()
  expect(tree.toTree().props.dispatch).toBeCalled()
})

it('calls updateMenteeRole on button press', () => {
  const tree = renderer.create(<SignUpRoles dispatch={jest.fn()} title='Your Role' roles={null} mentorSelected={false} menteeSelected={true} />)
  const submitButton = findById(tree.toJSON(), 'mentee-button')
  submitButton.props.onPress()
  expect(tree.toTree().props.dispatch).toBeCalled()
})
