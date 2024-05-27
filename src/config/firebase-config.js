import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqYusuUvQbtzz8UH1M-NDZKl20aelOKbE",
  authDomain: "friendlyfeed-5e157.firebaseapp.com",
  projectId: "friendlyfeed-5e157",
  storageBucket: "friendlyfeed-5e157.appspot.com",
  messagingSenderId: "1021053588883",
  appId: "1:1021053588883:web:6a38292faa649857464466",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
