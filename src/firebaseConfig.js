// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyCuJPejmZnCZ7jCc7OuPnOrvnjy5D_52PA",
 authDomain: "fir-auth-2fac0.firebaseapp.com",
 projectId: "fir-auth-2fac0",
 storageBucket: "fir-auth-2fac0.appspot.com",
 messagingSenderId: "1092909277887",
 appId: "1:1092909277887:web:b98b56b77102fe299d9c0a",
 measurementId: "G-3FJ0GZB3DC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
