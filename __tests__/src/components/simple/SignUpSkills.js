/* eslint-env jest */

import { Keyboard } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SignUpSkills from '../../../../src/components/simple/SignUpSkills';
import { findById } from '../../../../setupTests';

jest.mock('TouchableOpacity', () => {
  const mockComponent = require('jest-react-native');
  return mockComponent('TouchableHighlight');
});

jest.mock('Keyboard', () => ({
  dismiss: jest.fn(),
  addListener: jest.fn(),
}));

const skill = {name: 'test', proficiency:1};
const skills = [skill];
const tree = renderer.create(<SignUpSkills dispatch={jest.fn()} skill={skill} skills={skills} />);

it('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});

it('calls submit on button press', () => {
  const submitButton = findById(tree.toJSON(), 'skills-submit-button');
  submitButton.props.onPress();
  expect(Keyboard.dismiss).toBeCalled();
});

it('calls dispatch on change text', () => {
  const nameInput = findById(tree.toJSON(), 'skill-name-input');
  nameInput.props.onChangeText();
  expect(tree.toTree().props.dispatch).toBeCalled();
});
