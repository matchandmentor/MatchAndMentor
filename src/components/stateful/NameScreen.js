import React from 'react';
import { connect } from 'react-redux';
import SignUpName from '../simple/SignUpName';

const NameScreen = props => (
  <SignUpName
    title="Your Name"
    name={props.user.name}
    dispatch={props.dispatch}
  />
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(NameScreen);
