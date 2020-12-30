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

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

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

export const addCollectionsndItems = (collections) => {
  //creation des collections

  collections.forEach((el) => {
    const createdAt = new Date();
    const { routeName, title, items } = el;
    let newCollection = firestore.collection("collections");

    newCollection
      .add({
        title,
        routeName,
        createdAt,
      })
      .then((docRef) => {
        items.forEach(({ imageUrl, price, name }) => {
          let newProduct = firestore.collection("products");

          newProduct
            .add({
              name,
              description: null,
              price,
              collectionId: docRef.id,
              imageUrl,
              quantityInStock: 0,
            })
            .then((prodId) => console.log("produit creer avec succès", prodId))
            .catch((err) => console.log("erreur creation de produit", err));
        });
      })
      .catch((error) => console.error("error adding document ", error));
  });
};

/** fetch collections data ***/

export const fetchCollections = async () => {
  let collections = firestore.collection("collections");

  return collections;
};

export default firebase;
