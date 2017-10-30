import React from 'react';
import { connect } from 'react-redux';
import SignUpBirthday from '../simple/SignUpBirthday';

const BirthdayScreen = props => (
  <SignUpBirthday
    title="Your Birthday"
    birthday={props.user.birthday}
    dispatch={props.dispatch}
  />
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(BirthdayScreen);
