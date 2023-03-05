// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmySBBaGlClpS85XH9VieNeKMnMOid-CQ",
  authDomain: "tata1mg-demo.firebaseapp.com",
  projectId: "tata1mg-demo",
  storageBucket: "tata1mg-demo.appspot.com",
  messagingSenderId: "313811347771",
  appId: "1:313811347771:web:eaccfaf560029989d02f1e",
  measurementId: "G-8Z7FFXELQ0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
export {auth}