/* eslint-env jest */
'use strict'
import 'react-native'
import React from 'react'
import ScreenHeader from '../../../../src/components/simple/ScreenHeader'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <ScreenHeader />
  )
  expect(tree).toMatchSnapshot()
})
