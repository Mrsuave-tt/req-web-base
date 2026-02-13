import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0Fpao_VJDMMfc9A20RXv3q0jRP9Lkt5U",
  authDomain: "csrpha-rf.firebaseapp.com",
  projectId: "csrpha-rf",
  storageBucket: "csrpha-rf.firebasestorage.app",
  messagingSenderId: "596517188878",
  appId: "1:596517188878:web:3b5769c0bad44902cc535f",
  measurementId: "G-X7EY9QVT72"
};

// Initialize Firebase (prevent duplicate initialization)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
export const db = getFirestore(app);
export default app;
