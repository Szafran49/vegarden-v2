import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqOO4aH7PUrrlZC_xJTeUwwoqQHg_y2wM",
  authDomain: "vegarden-65938.firebaseapp.com",
  projectId: "vegarden-65938",
  storageBucket: "vegarden-65938.appspot.com",
  messagingSenderId: "373773736278",
  appId: "1:373773736278:web:65413c312556c777a49ef7",
  measurementId: "G-VZYS95KBFX",
});

export const db = firebaseApp.firestore();
export const storage = firebase.storage();
export const imagesDir = "VegetablesImages/";
