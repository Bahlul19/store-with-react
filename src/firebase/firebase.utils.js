import firebase from 'firebase/app';
//including the firebase app into application
import 'firebase/firestore';
//this is for db
import 'firebase/auth';
//this is for the authentication

//added the code the firebase console which is generated from the firebase


const config = {
    apiKey: "AIzaSyB-xYR3022I-KP_rAwc0AbO1UyJySeWLho",
    authDomain: "store-with-project.firebaseapp.com",
    projectId: "store-with-project",
    storageBucket: "store-with-project.appspot.com",
    messagingSenderId: "39070734238",
    appId: "1:39070734238:web:bf5ec1aa1fbfc894d9e88f",
    measurementId: "G-GLJ0Q9F0RN"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //this is using for google authentication library
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;