
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAWmiwzoDAU_fzZQBMD901JtpRGnUlYXe4",
  authDomain: "tinder-clone-c180b.firebaseapp.com",
  projectId: "tinder-clone-c180b",
  storageBucket: "tinder-clone-c180b.appspot.com",
  messagingSenderId: "374463474485",
  appId: "1:374463474485:web:23fdc0a69f861a8bf47a7c",
  measurementId: "G-N11GCR4MN7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;