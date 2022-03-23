import { combineReducers } from "redux";

import authentication from './authReducer'
import global from './globalReducer'

export default combineReducers({
  authentication,
  global
})