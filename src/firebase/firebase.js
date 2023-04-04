import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';

// Server Key
module.exports = "[AAAAaVwVJDg:APA91bHxCcztXkBcXssR1kP8ySC2IAshEp_cQ0lx_GpZaP0D1n2ao3P6qZaGzoNESbLaSBFdTfpUng6tZ9xg59X9zUWrNZ4YoGq8hUFMZhLpJ6_I3vY9nFrVSngk_ibQve24jfcjJfCJ]";

// Firebase configuration
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

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default {
  db
}
