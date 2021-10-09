import firebase from "firebase/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpXxMW-cclykfmlZRok9NOxk39766KJmE",
  authDomain: "colheita-feliz-51427.firebaseapp.com",
  projectId: "colheita-feliz-51427",
  storageBucket: "colheita-feliz-51427.appspot.com",
  messagingSenderId: "784488561061",
  appId: "1:784488561061:web:0a9190d32a8feef1a9d04c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase