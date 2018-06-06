import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGGED,
  LOGGED_IN,
  LOGGED_OUT,
  SIGNED_OUT_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false,
  isLoggedIn: false,
  hasCheckedAuthState: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, error: ''};
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
    case SIGNED_OUT_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload.error, password: '', loading: false };
    case LOGGED:
      return { ...state, isLoggedIn: false, hasCheckedAuthState: false};
    case LOGGED_IN:
      return { ...state, isLoggedIn: true, hasCheckedAuthState: true};
    case LOGGED_OUT:
      return { ...state, isLoggedIn: false, hasCheckedAuthState: true };
    default:
      return state;
  }
};
