import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyC_UTBprAQEVZbTUxshZ_bmn776w8atYAQ",
  authDomain: "react-slack-22b79.firebaseapp.com",
  databaseURL: "https://react-slack-22b79.firebaseio.com",
  projectId: "react-slack-22b79",
  storageBucket: "react-slack-22b79.appspot.com",
  messagingSenderId: "99626390208",
  appId: "1:99626390208:web:9b05dbed71f29d2d269325",
  measurementId: "G-L7H2378QF8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
