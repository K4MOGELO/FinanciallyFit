// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-AhI7lP77MllIcT2upYf1-GE0dpjA0Hk",
  authDomain: "financiallyfit-59914.firebaseapp.com",
  projectId: "financiallyfit-59914",
  storageBucket: "financiallyfit-59914.appspot.com",
  messagingSenderId: "102d314371064",
  appId: "1:1023314371064:web:99d1640446e4c52dbdb60d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
