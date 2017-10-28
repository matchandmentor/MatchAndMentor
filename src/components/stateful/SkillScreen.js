import React from 'react';
import { connect } from 'react-redux';
import SignUpSkills from '../simple/SignUpSkills';

const SkillScreen = props => (
  <SignUpSkills
    title="Your skills"
    skill={props.user.skill}
    skills={props.user.skills}
    dispatch={props.dispatch}
  />
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(SkillScreen);
