// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-M2VK3FGjoyRT9EQutcEtG_t_p7LaQqY",
  authDomain: "streamify-bd06b.firebaseapp.com",
  projectId: "streamify-bd06b",
  storageBucket: "streamify-bd06b.appspot.com",
  messagingSenderId: "1035122720760",
  appId: "1:1035122720760:web:955e3fd041615442c9e00d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth =getAuth(app)