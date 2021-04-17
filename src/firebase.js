// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAsHe7O-de1p8TEZd5eLnESJ_XMkQvJF3I",
    authDomain: "challenge-fa047.firebaseapp.com",
    projectId: "challenge-fa047",
    storageBucket: "challenge-fa047.appspot.com",
    messagingSenderId: "503564119963",
    appId: "1:503564119963:web:1c069ca977bd5f36edfb3e",
    measurementId: "G-WKB255TX9M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };