import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9nzrzQusmcVExM8ZSPXyzrlHIl94SEQ4",
    authDomain: "disney-clone-41ad2.firebaseapp.com",
    projectId: "disney-clone-41ad2",
    storageBucket: "disney-clone-41ad2.appspot.com",
    messagingSenderId: "1023600718811",
    appId: "1:1023600718811:web:ed5a0184867f7b14906dfe",
    measurementId: "G-T770JWNX1P"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
