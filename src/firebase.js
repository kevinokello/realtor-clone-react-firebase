// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsfWK8FwTCRJkthrlCZHGfnJRrHCtW5wU",
  authDomain: "realtor-7f3c3.firebaseapp.com",
  projectId: "realtor-7f3c3",
  storageBucket: "realtor-7f3c3.appspot.com",
  messagingSenderId: "1052539148638",
  appId: "1:1052539148638:web:40fe78f09ecb51503697cf",
  measurementId: "G-NJ9YJGN5MM",
};
// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
