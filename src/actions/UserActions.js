import { database, auth } from '../firebase';
import {
  ROLE_SCREEN,
  UPDATE_NAME,
  SKILL_SCREEN,
  UPDATE_MENTOR_ROLE,
  UPDATE_MENTEE_ROLE,
} from '../actions/types';

export const submitName = name => {
  const { currentUser } = auth;
  return dispatch => {
    database
      .ref(`/users/${currentUser.uid}/profile`)
      .update({ name })
      .then(() => {
        dispatch({ type: ROLE_SCREEN });
      });
  };
};

export const updateName = name => ({
  type: UPDATE_NAME,
  payload: name,
});

export const submitRoles = roles => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/profile`)
      .update({ roles })
      .then(() => {
        dispatch({ type: SKILL_SCREEN });
      });
  };
};

export const updateMentorRole = status => ({
  type: UPDATE_MENTOR_ROLE,
  payload: status,
});

export const updateMenteeRole = status => ({
  type: UPDATE_MENTEE_ROLE,
  payload: status,
});
