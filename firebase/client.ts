import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "vocalis-6388a.firebaseapp.com",
  projectId: "vocalis-6388a",
  storageBucket: "vocalis-6388a.firebasestorage.app",
  messagingSenderId: "276358909972",
  appId: "1:276358909972:web:bd69d002129142b47ad701",
  measurementId: "G-8LVZK362ND"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)
