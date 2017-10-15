import { UPDATE_NAME, UPDATE_ROLES, UPDATE_MENTOR_ROLE, UPDATE_MENTEE_ROLE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  roles: null,
  mentorSelected: false,
  menteeSelected: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_NAME: {
      return { ...state, name: action.payload };
    }
    case UPDATE_ROLES: {
      return { ...state, roles: action.payload };
    }
    case UPDATE_MENTOR_ROLE: {
      return { ...state, mentorSelected: action.payload };
    }
    case UPDATE_MENTEE_ROLE: {
      return { ...state, menteeSelected: action.payload };
    }
    default:
      return state;
  }
};
