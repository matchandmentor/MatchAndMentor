import React from 'react';
import { connect } from 'react-redux';
import SignUpRoles from '../simple/SignUpRoles';

const RoleScreen = props => (
  <SignUpRoles
    title="Your Role"
    roles={props.user.roles}
    mentorSelected={props.user.mentorSelected}
    menteeSelected={props.user.menteeSelected}
    dispatch={props.dispatch}
  />
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(RoleScreen);
