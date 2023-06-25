import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAicT60WQI0OLyfdl1S5jkOxRmAMAV8ZDA",
    authDomain: "saxion-demo-a78ba.firebaseapp.com",
    projectId: "saxion-demo-a78ba",
    storageBucket: "saxion-demo-a78ba.appspot.com",
    messagingSenderId: "2378843851",
    appId: "1:2378843851:web:63173ed0b447d3e09b3d4e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db;

export const auth = getAuth()
