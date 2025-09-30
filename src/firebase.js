import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJAgNUbdPLe7MkpRoLPAk4XYeaRnFNqOw",
  authDomain: "agenda-4ec5d.firebaseapp.com",
  projectId: "agenda-4ec5d",
  storageBucket: "agenda-4ec5d.firebasestorage.app",
  messagingSenderId: "1098401248307",
  appId: "1:1098401248307:web:51e8c023bd6ea82cce5f46",
  measurementId: "G-680E07DBLN"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);