import React, { Component } from 'react';
import { connect } from 'react-redux';
import Summary from '../simple/Summary';

const MenteeSummaryScreen = (props) => (
  <Summary
    headerText='As a mentee, what do you look for in a mentorship?'
    isMentor={false}
    menteeSummary={props.user.menteeSummary}
    dispatch={props.dispatch}
    loadMenteeScreenNext={false}
  />
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(MenteeSummaryScreen);
