import {combineReducers} from 'redux'
import postReducer from './postReducers'
import usersReducer from './usersReducer'

export default combineReducers({
  posts: postReducer,
  users: usersReducer
})