import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigation/AppWithNavigationState';
import { HOME_SCREEN } from '../actions/types';

export default (state, action) => {
  let nextState;
  switch (action.type) {
    case HOME_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: HOME_SCREEN }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};
