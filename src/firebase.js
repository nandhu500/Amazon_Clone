import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_y5HX1WkjEjeQ0zaYx3oD9Lz9gv0xrNk",
  authDomain: "challenge-ae157.firebaseapp.com",
  databaseURL: "https://challenge-ae157.firebaseio.com",
  projectId: "challenge-ae157",
  storageBucket: "challenge-ae157.appspot.com",
  messagingSenderId: "104437361276",
  appId: "1:104437361276:web:d0ec98129a83d5b09d37f9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
