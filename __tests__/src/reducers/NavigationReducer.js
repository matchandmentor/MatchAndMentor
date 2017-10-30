/* eslint-env jest */
import reducer from '../../../src/reducers/NavigationReducer'
import { NAME_SCREEN, ROLE_SCREEN, SKILL_SCREEN, SUMMARY_SCREEN,
  MENTEE_SUMMARY_SCREEN, PHOTO_SCREEN, BIRTHDAY_SCREEN } from '../../../src/actions/types'

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

test('navigation reducer should handle SUMMARY_SCREEN', () => {
  expect(reducer(INITIAL_STATE, { type: SUMMARY_SCREEN })).toEqual({
    index: 1,
    routes: [{
      key: expect.any(String),
      routeName: NAME_SCREEN
    }, {
      key: expect.any(String),
      routeName: SUMMARY_SCREEN
    }]
  })
})

test('navigation reducer should handle MENTEE_SUMMARY_SCREEN', () => {
  expect(reducer(INITIAL_STATE, { type: MENTEE_SUMMARY_SCREEN })).toEqual({
    index: 1,
    routes: [{
      key: expect.any(String),
      routeName: NAME_SCREEN
    }, {
      key: expect.any(String),
      routeName: MENTEE_SUMMARY_SCREEN
    }]
  })
})

test('navigation reducer should handle PHOTO_SCREEN', () => {
  expect(reducer(INITIAL_STATE, { type: PHOTO_SCREEN })).toEqual({
    index: 1,
    routes: [{
      key: expect.any(String),
      routeName: NAME_SCREEN
    }, {
      key: expect.any(String),
      routeName: PHOTO_SCREEN
    }]
  })
})

test('navigation reducer should handle BIRTHDAY_SCREEN', () => {
  expect(reducer(INITIAL_STATE, { type: BIRTHDAY_SCREEN })).toEqual({
    index: 1,
    routes: [{
      key: expect.any(String),
      routeName: NAME_SCREEN
    }, {
      key: expect.any(String),
      routeName: BIRTHDAY_SCREEN
    }]
  })
})
