import {
  UPDATE_NAME,
  UPDATE_MENTOR_ROLE,
  UPDATE_MENTEE_ROLE,
  UPDATE_MENTOR_SUMMARY,
  UPDATE_MENTEE_SUMMARY,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  roles: null,
  mentorSelected: false,
  menteeSelected: false,
  mentorSummary: '',
  menteeSummary: '',
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
    default:
      return state;
  }
};
