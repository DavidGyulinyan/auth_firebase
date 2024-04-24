// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBW_fSR2scSeI5Xvp-gTKr7UdV4RRBHUes",
    authDomain: "react-auth-6e4c0.firebaseapp.com",
    projectId: "react-auth-6e4c0",
    storageBucket: "react-auth-6e4c0.appspot.com",
    messagingSenderId: "1049731182841",
    appId: "1:1049731182841:web:c29bd2bf2e9fedb7227228"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth}