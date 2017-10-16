/* eslint-env jest */
import reducer from '../../../src/reducers/NavigationReducer'
import { NAME_SCREEN, ROLE_SCREEN, SKILL_SCREEN } from '../../../src/actions/types'

const INITIAL_STATE = {
  index: 0,
  routes: [{
    key: expect.any(String),
    routeName: NAME_SCREEN
  }]
}

test('navigation reducer should return intial state', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
})

test('navigation reducer should handle NAME_SCREEN', () => {
  expect(reducer(INITIAL_STATE, { type: NAME_SCREEN })).toEqual({
    index: 1,
    routes: [{
      key: expect.any(String),
      routeName: NAME_SCREEN
    }, {
      key: expect.any(String),
      routeName: NAME_SCREEN
    }]
  })
})

test('navigation reducer should handle ROLE_SCREEN', () => {
  expect(reducer(INITIAL_STATE, { type: ROLE_SCREEN })).toEqual({
    index: 1,
    routes: [{
      key: expect.any(String),
      routeName: NAME_SCREEN
    }, {
      key: expect.any(String),
      routeName: ROLE_SCREEN
    }]
  })
})

test('navigation reducer should handle SKILL_SCREEN', () => {
  expect(reducer(INITIAL_STATE, { type: SKILL_SCREEN })).toEqual({
    index: 1,
    routes: [{
      key: expect.any(String),
      routeName: NAME_SCREEN
    }, {
      key: expect.any(String),
      routeName: SKILL_SCREEN
    }]
  })
})
