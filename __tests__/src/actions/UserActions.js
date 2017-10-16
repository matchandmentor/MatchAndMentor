/* eslint-env jest */
'use strict'
import { submitName, updateName, updateMentorRole, updateMenteeRole, submitRoles } from '../../../src/actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { UPDATE_NAME, UPDATE_ROLES, SKILL_SCREEN, UPDATE_MENTOR_ROLE, UPDATE_MENTEE_ROLE } from '../../../src/actions/types'
import firebase from 'firebase'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

firebase.initializeApp({
  apiKey: 'AIzaSyAsjC_abpWmFCYmNoQl257nc807hHE_gsY',
  authDomain: 'matchandmentorapp.firebaseapp.com',
  databaseURL: 'https://matchandmentorapp.firebaseio.com',
  projectId: 'matchandmentorapp',
  storageBucket: 'matchandmentorapp.appspot.com',
  messagingSenderId: '1068797055216'
})
jest.genMockFromModule('firebase')

const ref = jest.fn(() => {
  return {
    update: jest.fn().mockImplementation(() => {
      return Promise.resolve()
    })
  }
})

firebase.auth = jest.fn().mockImplementation(() => {
  return {
    currentUser: { uid: '123' }
  }
})
firebase.initializeApp = jest.fn()
firebase.database = jest.fn(() => {
  return {
    ref: ref
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
  expect(firebase.database).toBeCalled()
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
  expect(firebase.database).toBeCalled()
})
