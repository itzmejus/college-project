import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDYjLuPp9CZ5NGZsb7fEDPKtj8hAmRZGFk",
    authDomain: "ecommerce-f0abd.firebaseapp.com",
    databaseURL: "https://ecommerce-f0abd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ecommerce-f0abd",
    storageBucket: "ecommerce-f0abd.appspot.com",
    messagingSenderId: "4600665283",
    appId: "1:4600665283:web:6ec9ecc2b18e53aaba3e76"
  };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }