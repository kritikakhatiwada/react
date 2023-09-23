// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBks-07tXX7x8p8wPmHeAl7mnkjJfU4g_M",
  authDomain: "react-1557e.firebaseapp.com",
  projectId: "react-1557e",
  storageBucket: "react-1557e.appspot.com",
  messagingSenderId: "873003900157",
  appId: "1:873003900157:web:3d96885c470e50ab943294",
  measurementId: "G-3LTNEL8BWW",
};

// Initialize Firebase
export function initializeFirebase() {
  initializeApp(firebaseConfig);
}
