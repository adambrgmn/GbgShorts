import firebase from 'firebase';

try {
  const config = {
    apiKey: process.env.FB_API,
    authDomain: 'gbgshorts.firebaseapp.com',
    databaseURL: 'https://gbgshorts.firebaseio.com',
  };

  firebase.initializeApp(config);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const root = firebase.database().ref('v2');
export default root;

export const pages = firebase.database().ref('v2/pages');
export const posts = firebase.database().ref('v2/posts');
