import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { FacebookAuthProvider } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBo40pOr3VlZT9yC0GKnFtlIdHjAWQ6GE",
    authDomain: "loginpokemon-c6a73.firebaseapp.com",
    projectId: "loginpokemon-c6a73",
    storageBucket: "loginpokemon-c6a73.appspot.com",
    messagingSenderId: "510785029636",
    appId: "1:510785029636:web:8f45d3110320246a539751"
  };

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export{
    app, 
    google,
    facebook,
    db
}