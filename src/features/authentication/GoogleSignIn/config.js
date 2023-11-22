import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWXGnxSwCaZen2HsnOfZihdeI5v3ALYng",
    authDomain: "cabin-charter.firebaseapp.com",
    projectId: "cabin-charter",
    storageBucket: "cabin-charter.appspot.com",
    messagingSenderId: "997370884124",
    appId: "1:997370884124:web:fad1ae3b0d8a7b0923efd9",
    measurementId: "G-YC9WPBSN8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };