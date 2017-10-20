import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import Summary from '../simple/Summary';

const headerText = (
  <Text>
    As a
    <Text style={{ fontWeight: 'bold' }}> mentee</Text>
    <Text>, what do you look for in a mentorship?</Text>
  </Text>
);

const MenteeSummaryScreen = props => (
  <Summary
    headerText={headerText}
    isMentor={false}
    menteeSummary={props.user.menteeSummary}
    dispatch={props.dispatch}
    loadMenteeScreenNext={false}
    menteeOnly={!props.user.mentorSelected}
  />
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(MenteeSummaryScreen);
