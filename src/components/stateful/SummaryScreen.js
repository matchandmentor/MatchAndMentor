import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import Summary from '../simple/Summary';
import MenteeSummaryScreen from './MenteeSummaryScreen';

const SummaryScreen = props => {
  if (props.user.mentorSelected && props.user.menteeSelected) {
    const headerText = (
      <Text>
        As a
        <Text style={{ fontWeight: 'bold' }}> mentor</Text>
        <Text>, what do you look for in a mentorship?</Text>
      </Text>
    );
    return (
      <Summary
        headerText={headerText}
        isMentor
        mentorSummary={props.user.mentorSummary}
        dispatch={props.dispatch}
        loadMenteeScreenNext
      />
    );
  } else if (props.user.mentorSelected) {
    const headerText = (
      <Text>
        As a
        <Text style={{ fontWeight: 'bold' }}> mentor</Text>
        <Text>, what do you look for in a mentorship?</Text>
      </Text>
    );
    return (
      <Summary
        headerText={headerText}
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
