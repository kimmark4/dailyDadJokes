// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBn9h8a2x4GAFPeU6rAJw2ZqR0oNtB8k-w",

  authDomain: "daily-dad-jokes-9ce9c.firebaseapp.com",

  databaseURL: "https://daily-dad-jokes-9ce9c-default-rtdb.firebaseio.com",

  projectId: "daily-dad-jokes-9ce9c",

  storageBucket: "daily-dad-jokes-9ce9c.appspot.com",

  messagingSenderId: "581267983258",

  appId: "1:581267983258:web:d20a00ea0d48f1f8628823"

};


// Initialize Firebase

const firebase = initializeApp(firebaseConfig);

export default firebase;