import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlhSQunMzz_BCUi2Bv6ReRlHE2kT5TqOk",
  authDomain: "happy-hour-locator-db-5c476.firebaseapp.com",
  projectId: "happy-hour-locator-db-5c476",
  storageBucket: "happy-hour-locator-db-5c476.appspot.com",
  messagingSenderId: "58222243031",
  appId: "1:58222243031:web:122b35876f034904f09492",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// instance of Google provider object
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// add user to database in users collection:
export const createUserDocumentFromAuth = async (
  userAuth,
  addditionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  //check wheter or not the instance of the user exists and access data
  const userSnapshot = await getDoc(userDocRef);

  //if user data not exists (create new data in collection) -otherwise return it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addditionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user!", error.message);
    }
  }
  return userDocRef;
};

// add admin to database in admins collection:
export const createAdminDocumentFromAuth = async (
  adminAuth,
  addditionalInformation = {}
) => {
  if (!adminAuth) return;

  const adminDocRef = doc(db, "admins", adminAuth.uid);
  const adminSnapshot = await getDoc(adminDocRef);

  if (!adminSnapshot.exists()) {
    const { locationName, email } = adminAuth;
    const createdAt = new Date();
    try {
      await setDoc(adminDocRef, {
        locationName,
        email,
        createdAt,
        ...addditionalInformation,
      });
    } catch (error) {
      console.log("Error creating the admin!", error.message);
    }
  }
  return adminDocRef;
};

// sign up with email
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// sign in with email
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// sign out
export const signOutUser = async () => await signOut(auth);

// get the state of the user (whenever it is instantiated it gives a callback)
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

////////////////////////////////////////////////////////////////////////////////////////
//add elements to collection
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db); //let's you add operations to it, and at the end begin transaction

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.locationName.toLowerCase()); //change title
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// get the data from firebase
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "locations");

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const locationsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { locationName, events } = docSnapshot.data();
    acc[locationName.toLowerCase()] = events;
    return acc;
  }, {});

  return locationsMap;
};
