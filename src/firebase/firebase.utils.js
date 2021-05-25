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
};

//getting user information via firebase
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    // const userRef = firestore.doc('users/tausifNew'); this is statis one.
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //snap that create the data
    const snapShot = await userRef.get();
    // console.log(snapShot);

    if(!snapShot.exists)
    {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
 
          try {
            await userRef.set({
                displayName,
                email, 
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating users', error.message);
        }
    }

    return userRef;

        // console.log(firestore.doc('users/tausifnew'));
};


// export const createUserProfileDocument = async (userAuth, additionalData) => {
//     if(!userAuth) return;
//     console.log(firestore.doc('users/133uyi3bb'));
// }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //this is using for google authentication library
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;