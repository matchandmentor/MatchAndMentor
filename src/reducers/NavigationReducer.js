import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigation/AppWithNavigationState';
import { NAME_SCREEN, ROLE_SCREEN, SKILL_SCREEN, SUMMARY_SCREEN, MENTEE_SUMMARY_SCREEN, PHOTO_SCREEN, } from '../actions/types';

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
    case SKILL_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: SKILL_SCREEN }),
        state
      );
      break;
    case SUMMARY_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: SUMMARY_SCREEN }),
        state
      );
      break;
    case MENTEE_SUMMARY_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: MENTEE_SUMMARY_SCREEN }),
        state
      );
      break;
    case PHOTO_SCREEN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: PHOTO_SCREEN }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};
