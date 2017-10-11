import React from 'react';
import { Provider } from 'react-redux';
import store from '../reducers/store';
import AppWithNavigationState from '../navigation/AppWithNavigationState';

const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
