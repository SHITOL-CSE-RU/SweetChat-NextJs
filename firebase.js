import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAY1s4f2j46TQKYz2Uwj7nUySa5g_bvY1k",
  authDomain: "sweetchatweb.firebaseapp.com",
  projectId: "sweetchatweb",
  storageBucket: "sweetchatweb.appspot.com",
  messagingSenderId: "603753598245",
  appId: "1:603753598245:web:f877c86be1e9a708441ecc"
};

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };