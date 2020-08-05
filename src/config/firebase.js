import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBCDuxxxTkNwAfHvKgX5UH43hHg7dAYdE4',
  authDomain: 'launch-date-app.firebaseapp.com',
  databaseURL: 'https://launch-date-app.firebaseio.com',
  projectId: 'launch-date-app',
  storageBucket: 'launch-date-app.appspot.com',
  messagingSenderId: '699094569734',
  appId: '1:699094569734:web:3e7681f0dc44b4435bc487',
  measurementId: 'G-K5W3BP2N7V',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
