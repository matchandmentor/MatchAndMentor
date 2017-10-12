import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import NavigationReducer from './NavigationReducer'
import UserReducer from './UserReducer'

export default combineReducers({
  nav: NavigationReducer,
  user: UserReducer,
  form: FormReducer
})
