import { database, auth } from '../firebase';
import {
  ROLE_SCREEN,
  UPDATE_NAME,
  SKILL_SCREEN,
  UPDATE_MENTOR_ROLE,
  UPDATE_MENTEE_ROLE,
  UPDATE_SKILL_NAME,
  UPDATE_SKILL_PROFICIENCY,
  UPDATE_SKILL,
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

export const updateSkillName = skillName => ({
  type: UPDATE_SKILL_NAME,
  payload: skillName,
});

export const updateSkillProficiency = skillProficiency => ({
  type: UPDATE_SKILL_PROFICIENCY,
  payload: skillProficiency,
});

export const updateSkill = skill => ({
  type: UPDATE_SKILL,
  payload: skill,
});
