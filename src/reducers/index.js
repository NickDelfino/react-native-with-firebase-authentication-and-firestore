import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import SessionReducer from './NoteReducer';

export default combineReducers({
  Auth: AuthReducer,
  Profile: ProfileReducer,
  Session: SessionReducer
});
