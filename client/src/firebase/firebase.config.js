// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEyWXF4rNS4V-sOWlElGh0XG3eY5jBgr4",
  authDomain: "peekproducts-14eff.firebaseapp.com",
  projectId: "peekproducts-14eff",
  storageBucket: "peekproducts-14eff.appspot.com",
  messagingSenderId: "659956460806",
  appId: "1:659956460806:web:1960a0eda27dcac19dc287",
  measurementId: "G-NPK4SLCRQ5"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
