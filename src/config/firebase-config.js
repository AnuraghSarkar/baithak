import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAG7zmoDf5X0tdhcu-8ZgZQ2MAQGlpaR7o",
  authDomain: "baithak-c4f45.firebaseapp.com",
  projectId: "baithak-c4f45",
  storageBucket: "baithak-c4f45.appspot.com",
  messagingSenderId: "127072954085",
  appId: "1:127072954085:web:50772b09baf71f35ca960c",
  measurementId: "G-76QSB6W5PS",
};

// Initializing Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;