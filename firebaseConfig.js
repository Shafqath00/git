// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBytudXLIGzaCD50nsanfUUwBo-f2F6Aus",
  authDomain: "dashboard-67e48.firebaseapp.com",
  projectId: "dashboard-67e48",
  storageBucket: "dashboard-67e48.firebasestorage.app",
  messagingSenderId: "26499571534",
  appId: "1:26499571534:web:ab30ba545a4f822746481f",
  measurementId: "G-D55C4ZKVFQ"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db,onAuthStateChanged,GoogleAuthProvider,signInWithPopup};