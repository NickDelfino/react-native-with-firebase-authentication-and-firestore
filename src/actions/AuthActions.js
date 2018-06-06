import firebase from 'firebase';
import '@firebase/firestore';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGGED_IN,
  LOGGED_OUT
} from './types';
import { NavigationActions } from "react-navigation";

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const authUser = (email, password, navigation) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(navigation))
        .catch((err) => {
          //If there is an error during sign in we'll assume this means
          //the account doesn't exist and attempt to create one. If the error is different,
          //then this auth action will fail again and we'll show the error to the user.
          firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(user => loginUserSuccess(navigation))
              .catch((err) => loginUserFail(dispatch, err));
        });
  };
};

//This checks to see if the user is currently signed in.
export const checkUserAuth = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch({
          type: LOGGED_IN
        });
      } else {
        dispatch({
          type: LOGGED_OUT
        });
      }
    });
  };
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: {
      error: error
    }
  });
};

const loginUserSuccess = async (navigation) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'SignedIn'})],
    });
    navigation.dispatch(resetAction);
};