import {
  SIGNED_OUT,
  SIGNED_OUT_SUCCESS,
  SIGNED_OUT_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNED_OUT:
      return { ...state, loading: true, error: ''};
    case SIGNED_OUT_SUCCESS:
      return { ...state, loading: false, error: '' };
    case SIGNED_OUT_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
