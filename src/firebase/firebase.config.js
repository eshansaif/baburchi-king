// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPOxob4_e6ls42tBaJnbgbwAjKTQfkrXQ",
    authDomain: "baburchi-king.firebaseapp.com",
    projectId: "baburchi-king",
    storageBucket: "baburchi-king.appspot.com",
    messagingSenderId: "435932574269",
    appId: "1:435932574269:web:97f7969f19aa48b8337054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;