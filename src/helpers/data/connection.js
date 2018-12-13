import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from '../apiKeys';

const firebaseApp = () => {
  if (!firebase.apps.length) { // If there's no app running in Firebase
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
};

export default firebaseApp;