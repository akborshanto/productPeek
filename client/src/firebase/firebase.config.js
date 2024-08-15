

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGyMfX_vsgiOR_ZnVRCKuZtY2HoXGMvRo",
  authDomain: "productpeek-6a405.firebaseapp.com",
  projectId: "productpeek-6a405",
  storageBucket: "productpeek-6a405.appspot.com",
  messagingSenderId: "40139703202",
  appId: "1:40139703202:web:38017067f50c55925228fb",
  measurementId: "G-4WLYPS5J08"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)