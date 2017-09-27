import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../reducers/store'
import AppWithNavigationState from '../navigation/AppWithNavigationState'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
};
