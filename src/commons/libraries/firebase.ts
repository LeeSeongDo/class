// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9u2S5NWGAkgawS16D_LpWSUHi335XdQg",
  authDomain: "hybrid-flame-407207.firebaseapp.com",
  projectId: "hybrid-flame-407207",
  storageBucket: "hybrid-flame-407207.appspot.com",
  messagingSenderId: "399550034123",
  appId: "1:399550034123:web:e0e4e2c3639e2c78f16b4e",
  measurementId: "G-BF6JWETW24",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
