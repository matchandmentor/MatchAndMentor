import { database, auth } from '../firebase';
import {
  ROLE_SCREEN,
  NAME_SCREEN,
  SKILL_SCREEN,
  UPDATE_NAME,
  UPDATE_MENTOR_ROLE,
  UPDATE_MENTEE_ROLE,
  UPDATE_MENTOR_SUMMARY,
  UPDATE_MENTEE_SUMMARY,
  PHOTO_SCREEN,
  MENTEE_SUMMARY_SCREEN,
  SUBMIT_MENTOR_SUMMARY,
  SUBMIT_MENTEE_SUMMARY,
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

export const updateMentorSummary = summary => ({
  type: UPDATE_MENTOR_SUMMARY,
  payload: summary,
});

export const submitMentorSummary = (mentorSummary, loadMenteeScreenNext) => {
  const { currentUser } = auth;
  if (loadMenteeScreenNext) {
    return dispatch => {
      database
        .ref(`/users/${currentUser.uid}/profile`)
        .update({ mentorSummary })
        .then(() => {
          dispatch({ type: MENTEE_SUMMARY_SCREEN });
        });
    };
  }
  return dispatch => {
    database
      .ref(`/users/${currentUser.uid}/profile`)
      .update({ mentorSummary, menteeSummary: null })
      .then(() => {
        dispatch({ type: SUBMIT_MENTOR_SUMMARY });
        dispatch({ type: PHOTO_SCREEN });
      });
  };
};

export const updateMenteeSummary = summary => ({
  type: UPDATE_MENTEE_SUMMARY,
  payload: summary,
});

export const submitMenteeSummary = (menteeSummary, menteeOnly) => {
  const { currentUser } = auth;
  if (menteeOnly) {
    return dispatch => {
      database
        .ref(`/users/${currentUser.uid}/profile`)
        .update({ menteeSummary, mentorSummary: null })
        .then(() => {
          dispatch({ type: SUBMIT_MENTEE_SUMMARY });
          dispatch({ type: PHOTO_SCREEN });
        });
    };
  }
  return dispatch => {
    database
      .ref(`/users/${currentUser.uid}/profile`)
      .update({ menteeSummary })
      .then(() => {
        dispatch({ type: SUBMIT_MENTEE_SUMMARY });
        dispatch({ type: PHOTO_SCREEN });
      });
  };
};

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

export const setProficiencyAndSaveSkill = proficiency => (
  dispatch,
  getState
) => {
  dispatch(updateSkillProficiency(proficiency));
  dispatch(updateSkill(getState().user.skill));
};

export const submitSkills = () => dispatch => {
  dispatch({ type: NAME_SCREEN });
};
