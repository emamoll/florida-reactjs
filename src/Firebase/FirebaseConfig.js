import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXm_C-LF2j6GWx_aBZT8db620tlglkdCY",
  authDomain: "florida-moll.firebaseapp.com",
  projectId: "florida-moll",
  storageBucket: "florida-moll.appspot.com",
  messagingSenderId: "423531062200",
  appId: "1:423531062200:web:0ba0aaaa56ab8e595d254d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)