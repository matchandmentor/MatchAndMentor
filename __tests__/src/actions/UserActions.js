/* eslint-env jest */
'use strict'
import { submitName, updateName, updateMentorRole, updateMenteeRole, submitRoles } from '../../../src/actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { UPDATE_NAME, UPDATE_ROLES, SKILL_SCREEN, UPDATE_MENTOR_ROLE, UPDATE_MENTEE_ROLE } from '../../../src/actions/types'
import { database } from '../../../src/firebase'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('../../../src/firebase', () => {
  return {
    auth: {
      currentUser: { uid: '123' }
    },
    database: {
      ref: jest.fn(() => {
        return {
          update: jest.fn().mockImplementation(() => {
            return Promise.resolve()
          })
        }
      })
    }
  }
})

jest.mock('../../../src/reducers/store', () => {
  return {
    dispatch: jest.fn()
  }
})

test('updateName action', () => {
  const name = 'test'
  const expectedActions = [
    { type: UPDATE_NAME, payload: name }
  ]
  const store = mockStore()
  store.dispatch(updateName(name))
  expect(store.getActions()).toEqual(expectedActions)
})

test('submitName action', () => {
  const store = mockStore()
  store.dispatch(submitName('name'))
  expect(database.ref).toBeCalled()
})

test('updateMentorRole action', () => {
  const status = true
  const expectedActions = [
    { type: UPDATE_MENTOR_ROLE, payload: status }
  ]
  const store = mockStore()
  store.dispatch(updateMentorRole(status))
  expect(store.getActions()).toEqual(expectedActions)
})

test('updateMenteeRole action', () => {
  const status = true
  const expectedActions = [
    { type: UPDATE_MENTEE_ROLE, payload: status }
  ]
  const store = mockStore()
  store.dispatch(updateMenteeRole(status))
  expect(store.getActions()).toEqual(expectedActions)
})

test('submitRoles action', () => {
  const store = mockStore()
  store.dispatch(submitRoles('MENTOR_ONLY'))
  expect(database.ref).toBeCalled()
})
