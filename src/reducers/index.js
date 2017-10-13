import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  nav: NavigationReducer,
  user: UserReducer,
});
