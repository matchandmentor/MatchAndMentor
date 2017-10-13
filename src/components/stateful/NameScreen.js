import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignUpName from '../simple/SignUpName'

class NameScreen extends Component {
  render () {
    return (
      <SignUpName title='Your name' name={this.props.user.name} dispatch={this.props.dispatch} />
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps)(NameScreen)
