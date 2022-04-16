import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC0t2sXatcVcCrbRFsd2kl0J_ku9dQux88",
  authDomain: "sweetchat-9163f.firebaseapp.com",
  projectId: "sweetchat-9163f",
  storageBucket: "sweetchat-9163f.appspot.com",
  messagingSenderId: "51360590488",
  appId: "1:51360590488:web:b0ce6c6824496c82b3beed"
};

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
