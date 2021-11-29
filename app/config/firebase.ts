import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDsAoa69avlAofm4V8m9Y1xQkuknQ-ia0",
  authDomain: "tcc-project-auth.firebaseapp.com",
  projectId: "tcc-project-auth",
  storageBucket: "tcc-project-auth.appspot.com",
  messagingSenderId: "115485869875",
  appId: "1:115485869875:web:2d900fbc0e1c987681e046",
  measurementId: "G-S5B64GHR8S"
};

firebase.initializeApp(firebaseConfig);

export {firebase};