import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCERaAm4V9B7LT8gLox3_yYVL6vpUf1SVY",
  authDomain: "webshop-24e2d.firebaseapp.com",
  databaseURL:
    "https://webshop-24e2d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webshop-24e2d",
  storageBucket: "webshop-24e2d.appspot.com",
  messagingSenderId: "452516455480",
  appId: "1:452516455480:web:0397218a1929b2c39eb2cd",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
