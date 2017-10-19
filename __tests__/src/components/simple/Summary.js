/* eslint-env jest */
'use strict'
import React from 'react'
import Summary from '../../../../src/components/simple/Summary'
import renderer from 'react-test-renderer'
import { findById } from '../../../../setupTests'

jest.mock('TouchableOpacity', () => {
  const mockComponent = require('jest-react-native')
  return mockComponent('TouchableHighlight')
})

it('renders correctly and is a mentor', () => {
  const tree = renderer.create(<Summary dispatch={jest.fn()} headerText='mentor summary' isMentor loadMenteeScreenNext />)
  expect(tree).toMatchSnapshot()
})

it('renders correctly and is a mentee', () => {
  const tree = renderer.create(<Summary dispatch={jest.fn()} headerText='mentee summary' isMentor={false} />)
  expect(tree).toMatchSnapshot()
})

it('calls submit on button press with mentor', () => {
  const tree = renderer.create(<Summary dispatch={jest.fn()} headerText='mentor summary' isMentor loadMenteeScreenNext />)
  const submitButton = findById(tree.toJSON(), 'sum-submit-button')
  submitButton.props.onPress()
  expect(tree.toTree().props.dispatch).toBeCalled()
})

it('calls submit on button press with mentee', () => {
  const tree = renderer.create(<Summary dispatch={jest.fn()} headerText='mentor summary' isMentor={false} />)
  const submitButton = findById(tree.toJSON(), 'sum-submit-button')
  submitButton.props.onPress()
  expect(tree.toTree().props.dispatch).toBeCalled()
})

it('calls onChangeText with mentor', () => {
  const tree = renderer.create(<Summary dispatch={jest.fn()} headerText='mentor summary' isMentor loadMenteeScreenNext />)
  const input = findById(tree.toJSON(), 'sum-input')
  input.props.onChangeText()
  expect(tree.toTree().props.dispatch).toBeCalled()
})

it('calls onChangeText with mentee', () => {
  const tree = renderer.create(<Summary dispatch={jest.fn()} headerText='mentor summary' isMentor={false} />)
  const input = findById(tree.toJSON(), 'sum-input')
  input.props.onChangeText()
  expect(tree.toTree().props.dispatch).toBeCalled()
})
