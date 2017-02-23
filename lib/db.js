import firebase from 'firebase';

try {
  const config = {
    apiKey: 'AIzaSyCIASOJhX6iBHwIqDJOQS2rU7wcGiOhazQ',
    authDomain: 'gbgshorts.firebaseapp.com',
    databaseURL: 'https://gbgshorts.firebaseio.com',
    storageBucket: 'firebase-gbgshorts.appspot.com',
    messagingSenderId: '700799860690',
  };

  firebase.initializeApp(config);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const root = firebase.database().ref('v2');
export default root;

export const pages = root.child('pages');
