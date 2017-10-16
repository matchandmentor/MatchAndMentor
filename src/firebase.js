import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAsjC_abpWmFCYmNoQl257nc807hHE_gsY',
  authDomain: 'matchandmentorapp.firebaseapp.com',
  databaseURL: 'https://matchandmentorapp.firebaseio.com',
  projectId: 'matchandmentorapp',
  storageBucket: 'matchandmentorapp.appspot.com',
  messagingSenderId: '1068797055216',
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
