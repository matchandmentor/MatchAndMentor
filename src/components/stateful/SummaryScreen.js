import React, { Component } from 'react';
import { connect } from 'react-redux';
import Summary from '../simple/Summary';
import MenteeSummaryScreen from './MenteeSummaryScreen';

class SummaryScreen extends Component {
  render () {
    if (this.props.user.mentorSelected && this.props.user.menteeSelected) {
      return (
        <Summary
          headerText='As a mentor, what do you look for in a mentorship?'
          isMentor
          mentorSummary={this.props.user.mentorSummary}
          dispatch={this.props.dispatch}
          loadMenteeScreenNext
        />
      )
    } else if (this.props.user.mentorSelected) {
      return (
        <Summary
          headerText='As a mentor, what do you look for in a mentorship?'
          isMentor
          mentorSummary={this.props.user.mentorSummary}
          dispatch={this.props.dispatch}
          loadMenteeScreenNext={false}
        />
      )
    } else {
      return <MenteeSummaryScreen />
    }
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(SummaryScreen);
