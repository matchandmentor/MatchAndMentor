import firebase from 'firebase'
import { ROLE_SCREEN } from '../actions/types'

export const submitName = (name) => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profile`).set({name}).then(() => {
      dispatch({ type: ROLE_SCREEN })
    })
  }
}
