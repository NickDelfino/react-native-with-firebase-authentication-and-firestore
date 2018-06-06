import {
  SESSION_INFO_UPDATE,
  SUBMIT_INFO,
  SUBMIT_INFO_SUCCESS,
  SUBMIT_INFO_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: '',
  note: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SESSION_INFO_UPDATE:
      return {...state, note: action.payload.note};
    case SUBMIT_INFO:
      return {...state, loading: action.payload.loading, error: '', note: action.payload.note};
    case SUBMIT_INFO_SUCCESS:
      return {...state, loading: action.payload.loading, error: ''};
    case SUBMIT_INFO_FAIL:
      return {...state, loading: action.payload.loading, error: action.payload.error};
    default:
      return state;
  }
};
