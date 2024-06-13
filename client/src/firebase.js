// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-afd54.firebaseapp.com",
  projectId: "mern-blog-afd54",
  storageBucket: "mern-blog-afd54.appspot.com",
  messagingSenderId: "797795769643",
  appId: "1:797795769643:web:a968d49be5421ddedf396e",
  measurementId: "G-2Y5X491ECK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
