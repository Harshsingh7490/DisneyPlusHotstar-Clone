import firebase from "firebase";

const firebaseConfig = {

  apiKey:  "AIzaSyDbXz95rISYUhU-rciB1bWtaILLIOgzyEc",

  authDomain: "disneyplus-clone-2d0f4.firebaseapp.com",

  projectId: "disneyplus-clone-2d0f4",

  storageBucket: "disneyplus-clone-2d0f4.appspot.com",

  messagingSenderId: "566693635078",

  appId: "1:566693635078:web:d8302498cb7c3ffbc28f87",

  measurementId: "G-D86CPJK80Y"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
