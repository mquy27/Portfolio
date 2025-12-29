import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
// You can find this in your Firebase Console -> Project Settings -> General -> Your apps
const firebaseConfig = {
    apiKey: "AIzaSyD2qiyJJc_-vMFm1aLuP_IbxND-QuKSNzQ",
    authDomain: "quys-portfolio.firebaseapp.com",
    projectId: "quys-portfolio",
    storageBucket: "quys-portfolio.firebasestorage.app",
    messagingSenderId: "798119895050",
    appId: "1:798119895050:web:890fe20e3f639509423ff3",
    measurementId: "G-11G56N9RQ3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
