import firebase from "./firebase-config";
const socialMediaAuth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
        console.log(firebase.auth().currentUser.displayName);
        console.log(firebase.auth().currentUser.email);
      console.log(firebase.auth().currentUser.photoURL);
        
        
      return res.User;
    })
    .catch((er) => {
      return er;
    });
};

export default socialMediaAuth;
