import React from 'react';
import { connect } from 'react-redux';
import Summary from '../simple/Summary';
import MenteeSummaryScreen from './MenteeSummaryScreen';

const SummaryScreen = props => {
  if (props.user.mentorSelected && props.user.menteeSelected) {
    return (
      <Summary
        headerText="As a mentor, what do you look for in a mentorship?"
        isMentor
        mentorSummary={props.user.mentorSummary}
        dispatch={props.dispatch}
        loadMenteeScreenNext
      />
    );
  } else if (props.user.mentorSelected) {
    return (
      <Summary
        headerText="As a mentor, what do you look for in a mentorship?"
        isMentor
        mentorSummary={props.user.mentorSummary}
        dispatch={props.dispatch}
        loadMenteeScreenNext={false}
      />
    );
  }
  return <MenteeSummaryScreen />;
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(SummaryScreen);
