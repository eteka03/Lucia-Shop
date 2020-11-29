import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCwaVOnqAekEoJgq7MB4xiYjx-nmTHNXB4",
  authDomain: "e-comerce-db-9521f.firebaseapp.com",
  databaseURL: "https://e-comerce-db-9521f.firebaseio.com",
  projectId: "e-comerce-db-9521f",
  storageBucket: "e-comerce-db-9521f.appspot.com",
  messagingSenderId: "249732626586",
  appId: "1:249732626586:web:72bb0ace0e6f6637b78723",
  measurementId: "G-B3323W3LWK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

/****creation du profil de l'utilisateur*****/

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

/**** signin avec google */
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
