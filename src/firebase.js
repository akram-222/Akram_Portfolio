import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";
// import { getDatabase } from "firebase/database";
// import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCM8Nevx29oGcSfFZwUftIcmKDylRCzcB0",
  authDomain: "akram-portfolio-b66de.firebaseapp.com",
  projectId: "akram-portfolio-b66de",
  storageBucket: "akram-portfolio-b66de.appspot.com",
  messagingSenderId: "366480932294",
  appId: "1:366480932294:web:520fd11a1109a8b0ab06c7",
  measurementId: "G-3S8VYM0VJH",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
// export const db = firebase.getDatabase(app);
export const db = firebase.database();
