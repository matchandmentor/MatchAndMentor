import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigation/AppWithNavigationState';
import { NAME_SCREEN, ROLE_SCREEN } from '../actions/types';

export default (state, action) => {
  let nextState;
  switch (action.type) {
    case NAME_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: NAME_SCREEN }),
        state
      );
      break;
    case ROLE_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: ROLE_SCREEN }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};
