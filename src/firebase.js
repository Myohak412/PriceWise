import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDz35TpW0rsifxqdXW5nTve_s51nMi3jwE",
  authDomain: "pricewise-e1dc8.firebaseapp.com",
  projectId: "pricewise-e1dc8",
  storageBucket: "pricewise-e1dc8.firebasestorage.app",
  messagingSenderId: "428999765272",
  appId: "1:428999765272:web:143ffa858a2bca3227026d",
  measurementId: "G-9CN9GTCEXL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services for our pages to use
export const auth = getAuth(app);
export const db = getFirestore(app);