import firebase from "firebase";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

//initialize a Firebase instance
firebase.initializeApp(firebaseConfig);

//initialize Cloud Functions through Firebase
firebase.functions();

//this is optional, in case you want you wanna use analytics
firebase.analytics();

//export `firebase` the namespace to import it in src/App.js
export default firebase;