// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZRiOY5g8QHLxO7KQaHqEcyKCi2lfPsP4",
    authDomain: "dental-care-3336e.firebaseapp.com",
    projectId: "dental-care-3336e",
    storageBucket: "dental-care-3336e.appspot.com",
    messagingSenderId: "499165823691",
    appId: "1:499165823691:web:0ac7a7c64bfbc9a828114e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;