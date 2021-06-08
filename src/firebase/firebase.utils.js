import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC93YzaTBcMR9Q2DJMKtCAFxfyPNfNo3Hs",
    authDomain: "ecommerce-website-01.firebaseapp.com",
    projectId: "ecommerce-website-01",
    storageBucket: "ecommerce-website-01.appspot.com",
    messagingSenderId: "292684056431",
    appId: "1:292684056431:web:e5dd74e7427fa8c4044a9a",
    measurementId: "G-PW76SV4EZ1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


// setup google authentication utility

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;