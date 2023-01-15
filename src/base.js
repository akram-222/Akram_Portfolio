import * as firbase from 'firebase/app';
import "firebase/storage";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM8Nevx29oGcSfFZwUftIcmKDylRCzcB0",
  authDomain: "akram-portfolio-b66de.firebaseapp.com",
  projectId: "akram-portfolio-b66de",
  storageBucket: "akram-portfolio-b66de.appspot.com",
  messagingSenderId: "366480932294",
  appId: "1:366480932294:web:520fd11a1109a8b0ab06c7",
  measurementId: "G-3S8VYM0VJH"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);