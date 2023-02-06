// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyAzHilEU3gEzGCk5kHuW8xxY8o2JW90i6I",
 authDomain: "fir-presentation-1a02e.firebaseapp.com",
 projectId: "fir-presentation-1a02e",
 storageBucket: "fir-presentation-1a02e.appspot.com",
 messagingSenderId: "747193510285",
 appId: "1:747193510285:web:52ff16a8f54c7114eab5c4",
 measurementId: "G-S6GN71412Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
