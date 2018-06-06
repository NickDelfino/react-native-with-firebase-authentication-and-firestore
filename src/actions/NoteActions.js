import firebase from 'firebase';
import {
  SESSION_INFO_UPDATE,
  SUBMIT_INFO,
  SUBMIT_INFO_SUCCESS,
  SUBMIT_INFO_FAIL
} from './types';

export const updateNote = (note) => {
  return {
    type: SESSION_INFO_UPDATE,
    payload: {
      note: note
    }
  };
};

export const saveNote = (note) => {
  return (dispatch) => {
    const uid = firebase.auth().currentUser.uid;

    dispatch({
      type: SUBMIT_INFO,
      payload : {
        loading: true
      }
    });

    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);

    const data = {
      note: note,
      uploadTime: firebase.firestore.FieldValue.serverTimestamp()
    };

    const userRef = firestore.collection('users').doc(uid);
    userRef.collection('notes').doc().set(data)
    .then((docRef) => {
      dispatch({
        type: SUBMIT_INFO_SUCCESS,
        payload : {
          note: '',
          loading: false
        }
      });
    })
    .catch((error) => {
      dispatch({
        type: SUBMIT_INFO_FAIL,
        payload: {
          loading: false,
          error
        }
      });
    });
  };
};
