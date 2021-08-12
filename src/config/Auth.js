import firebase from "./firebase-config";
const socialMediaAuth = (provider) => {
   
    firebase.auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.User;
    })
    .catch((er) => {
      return er;
    });
};

export default socialMediaAuth;
