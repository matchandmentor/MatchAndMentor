 /* eslint-env jest */
'use strict'
import 'react-native'
import React from 'react'
import Button from '../../../../src/components/simple/Button'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Button onPress={() => null} />
  )
  expect(tree).toMatchSnapshot()
})
