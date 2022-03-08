import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDSV7rP5pBlW-IZ8R7Sw3pVlkSpCcZnaho",
    authDomain: "linkedin-clone-f8f25.firebaseapp.com",
    projectId: "linkedin-clone-f8f25",
    storageBucket: "linkedin-clone-f8f25.appspot.com",
    messagingSenderId: "276248239202",
    appId: "1:276248239202:web:0a19ad3a3acfa0a3aec53b",
    measurementId: "G-ELPXGX85ZL"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };
export default db;