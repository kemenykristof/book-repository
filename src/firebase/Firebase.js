import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyAp2TP6rjCjpwvqCYb6h6B7eE9oDAw0K8E",
  authDomain: "book-repository-8c4a4.firebaseapp.com",
  databaseURL: "https://book-repository-8c4a4.firebaseio.com",
  projectId: "book-repository-8c4a4",
  storageBucket: "book-repository-8c4a4.appspot.com",
  messagingSenderId: "1025700069993",
  appId: "1:1025700069993:web:fd887e872f718d0e2118f8",
  measurementId: "G-RVQ0WG412B"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
