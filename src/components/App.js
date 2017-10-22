import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { auth } from '../firebase';
import configureStore from '../reducers/store';
import AppWithNavigationState from '../navigation/AppWithNavigationState';

const store = configureStore();

export default class App extends Component {
  componentWillMount() {
    // TODO: remove this when we work on the login story!!!!!!
    auth.signInWithEmailAndPassword('test.user@test.com', 'test123');
  }
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
