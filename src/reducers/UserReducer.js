import {
  UPDATE_NAME,
  UPDATE_MENTOR_ROLE,
  UPDATE_MENTEE_ROLE,
  UPDATE_SKILL_NAME,
  UPDATE_SKILL_PROFICIENCY,
  UPDATE_SKILL,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  roles: null,
  mentorSelected: false,
  menteeSelected: false,
  skill: {},
  skills: [
    { name: 'testing', proficiency: 3 },
    { name: 'testing 2', proficiency: 2 },
  ],
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
    case UPDATE_SKILL_NAME: {
      const skill = { ...state.skill, name: action.payload }
      return { ...state, skill };
    }
    case UPDATE_SKILL_PROFICIENCY: {
      const skill = { ...state.skill, proficiency: action.payload };
      return { ...state, skill };
    }
    case UPDATE_SKILL: {
      const skills = [...state.skills, action.payload];
      return { ...state, skills };
    }
    default:
      return state;
  }
};
