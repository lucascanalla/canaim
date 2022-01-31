import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
// Your web app's Firebase configuration
const firebaseConfig = {  
    apiKey: "AIzaSyAKm1RQIH9r-KZASInLqxk3AbRLyjHXTwI",
    authDomain: "canaima-891be.firebaseapp.com",
    projectId: "canaima-891be",
    storageBucket: "canaima-891be.appspot.com",
    messagingSenderId: "644814997734",
    appId: "1:644814997734:web:9f93ecb14073fdccc25327"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}