// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGQ5wGwX_JvG23solVeaMp0dXyHi1O0EQ",
  authDomain: "shopery-95445.firebaseapp.com",
  projectId: "shopery-95445",
  storageBucket: "shopery-95445.appspot.com",
  messagingSenderId: "889024460991",
  appId: "1:889024460991:web:e0931c20e5310b11f36e0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;