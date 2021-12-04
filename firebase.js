import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCUzvzgxcR7tppMo50QJdsEUaMKwfEO4SQ",
  authDomain: "uber-next-clone-f18db.firebaseapp.com",
  projectId: "uber-next-clone-f18db",
  storageBucket: "uber-next-clone-f18db.appspot.com",
  messagingSenderId: "726803340683",
  appId: "1:726803340683:web:35ef152572845f91b2638e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth};