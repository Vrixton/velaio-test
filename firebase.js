// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3euSilyM16wBl3TIZR5UCpJgeobHb97k",
  authDomain: "velaio-test-5ff16.firebaseapp.com",
  projectId: "velaio-test-5ff16",
  storageBucket: "velaio-test-5ff16.appspot.com",
  messagingSenderId: "619708121096",
  appId: "1:619708121096:web:ae881ed78949261a0f11bd",
  measurementId: "G-BK90QH3BT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);