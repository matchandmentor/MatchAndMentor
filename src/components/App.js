import React, { Component } from 'react'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import store from '../reducers/store'
import AppWithNavigationState from '../navigation/AppWithNavigationState'

export default class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAsjC_abpWmFCYmNoQl257nc807hHE_gsY',
      authDomain: 'matchandmentorapp.firebaseapp.com',
      databaseURL: 'https://matchandmentorapp.firebaseio.com',
      projectId: 'matchandmentorapp',
      storageBucket: 'matchandmentorapp.appspot.com',
      messagingSenderId: '1068797055216'
    })
     // TODO: remove this when we work on the login story!!!!!!
    firebase.auth().signInWithEmailAndPassword('test.user@test.com', 'test123')
  }
  render () {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
};
