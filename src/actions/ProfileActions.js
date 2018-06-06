import firebase from 'firebase';
import {
  SIGNED_OUT,
  SIGNED_OUT_SUCCESS,
  SIGNED_OUT_FAIL
} from './types';

export const signOut = (navigation) => {
  return (dispatch) => {
    dispatch({type: SIGNED_OUT});
    firebase.auth().signOut()
        .then(() => {
          dispatch({
            type: SIGNED_OUT_SUCCESS
          });
        })
        .catch((error) => {
          console.log(error);
          dispatch({
            type: SIGNED_OUT_FAIL,
            payload: {
              error
            }
          });
        });
  };
};
