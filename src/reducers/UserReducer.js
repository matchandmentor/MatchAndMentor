import {
  UPDATE_NAME,
  UPDATE_MENTOR_ROLE,
  UPDATE_MENTEE_ROLE,
  UPDATE_MENTOR_SUMMARY,
  UPDATE_MENTEE_SUMMARY,
  SUBMIT_MENTOR_SUMMARY,
  SUBMIT_MENTEE_SUMMARY,
  UPDATE_BIRTHDAY,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  roles: null,
  mentorSelected: false,
  menteeSelected: false,
  mentorSummary: '',
  menteeSummary: '',
  birthday: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_NAME: {
      return { ...state, name: action.payload };
    }
    case UPDATE_MENTOR_ROLE: {
      return { ...state, mentorSelected: action.payload };
    }
    case UPDATE_MENTEE_ROLE: {
      return { ...state, menteeSelected: action.payload };
    }
    case UPDATE_MENTOR_SUMMARY: {
      return { ...state, mentorSummary: action.payload };
    }
    case UPDATE_MENTEE_SUMMARY: {
      return { ...state, menteeSummary: action.payload };
    }
    case SUBMIT_MENTOR_SUMMARY: {
      return { ...state, menteeSummary: '' };
    }
    case SUBMIT_MENTEE_SUMMARY: {
      return { ...state, mentorSummary: '' };
    }
    case UPDATE_BIRTHDAY: {
      return { ...state, birthday: action.payload };
    }
    default:
      return state;
  }
};
