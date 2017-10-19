import { database, auth } from '../firebase';
import {
  ROLE_SCREEN,
  UPDATE_NAME,
  SKILL_SCREEN,
  UPDATE_MENTOR_ROLE,
  UPDATE_MENTEE_ROLE,
  UPDATE_MENTOR_SUMMARY,
  UPDATE_MENTEE_SUMMARY,
  PHOTO_SCREEN,
  MENTEE_SUMMARY_SCREEN,
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
  const { currentUser } = auth;
  return dispatch => {
    database
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

export const updateMentorSummary = summary => ({
  type: UPDATE_MENTOR_SUMMARY,
  payload: summary,
});

export const submitMentorSummary = (mentorSummary, loadMenteeScreenNext) => {
  const { currentUser } = auth;
  return dispatch => {
    database
      .ref(`/users/${currentUser.uid}/profile`)
      .update({ mentorSummary })
      .then(() => {
        if (loadMenteeScreenNext) {
          dispatch({ type: MENTEE_SUMMARY_SCREEN });
        } else {
          dispatch({ type: PHOTO_SCREEN });
        }
      });
  };
};

export const updateMenteeSummary = summary => ({
  type: UPDATE_MENTEE_SUMMARY,
  payload: summary,
});

export const submitMenteeSummary = menteeSummary => {
  const { currentUser } = auth;
  return dispatch => {
    database
      .ref(`/users/${currentUser.uid}/profile`)
      .update({ menteeSummary })
      .then(() => {
        dispatch({ type: PHOTO_SCREEN });
      });
  };
};
