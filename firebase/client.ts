
import { initializeApp, getApp, getApps } from "firebase/app";
import  { getAuth } from "firebase/auth";
import  {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkBRqOfwYPdGRJOoqxNw3a9yaKtdggnOY",
    authDomain: "aimockwise-8eb1e.firebaseapp.com",
    projectId: "aimockwise-8eb1e",
    storageBucket: "aimockwise-8eb1e.firebasestorage.app",
    messagingSenderId: "383131045737",
    appId: "1:383131045737:web:a8d8cb12a4102fc533b7f8",
    measurementId: "G-S569PBZ32Y"
};

// Initialize Firebase
const app =!getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);