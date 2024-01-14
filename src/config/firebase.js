// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpvzyH0dCbgPohLeDHnp6DH6uDlwOBZ4M",
  authDomain: "vite-contact-1884f.firebaseapp.com",
  projectId: "vite-contact-1884f",
  storageBucket: "vite-contact-1884f.appspot.com",
  messagingSenderId: "530117806927",
  appId: "1:530117806927:web:281e30a26a12fbaeb6533a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)