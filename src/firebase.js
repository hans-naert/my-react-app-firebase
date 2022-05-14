// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJgBHQnOVlF20Jv_AZyXR5LrsEjXGu4Pk",
  authDomain: "my-react-app-firebase.firebaseapp.com",
  projectId: "my-react-app-firebase",
  storageBucket: "my-react-app-firebase.appspot.com",
  messagingSenderId: "1019210612343",
  appId: "1:1019210612343:web:464d10a61c202c3cb01072",
  measurementId: "G-T1BZLM3G9C",
  databaseURL: "https://my-react-app-firebase-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// Get a reference to the database service
export const database = getDatabase(app);