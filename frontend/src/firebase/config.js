// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Auth
const auth = getAuth();

export { auth };

