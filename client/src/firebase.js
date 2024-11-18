// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "groceries-app-b740c.firebaseapp.com",

  databaseURL: "https://groceries-app-b740c-default-rtdb.firebaseio.com",

  projectId: "groceries-app-b740c",

  storageBucket: "groceries-app-b740c.appspot.com",

  messagingSenderId: "172407271569",

  appId: "1:172407271569:web:79129e281619ba7fd50f30"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);