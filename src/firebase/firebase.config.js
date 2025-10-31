// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8_3ot8c8dZaX1CcU-Kj_t4yU3pqus2Vo",
  authDomain: "smart-deals-e0509.firebaseapp.com",
  projectId: "smart-deals-e0509",
  storageBucket: "smart-deals-e0509.firebasestorage.app",
  messagingSenderId: "338286366057",
  appId: "1:338286366057:web:58e3cc27c36150dfb701f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);