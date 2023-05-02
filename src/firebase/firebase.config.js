// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_APIKEY)
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAa6QHXJRcb95rJBnXkdGfmo1CCFQbJR4k",
//   authDomain: "tasty-cookes-compass.firebaseapp.com",
//   projectId: "tasty-cookes-compass",
//   storageBucket: "tasty-cookes-compass.appspot.com",
//   messagingSenderId: "731418475509",
//   appId: "1:731418475509:web:f57b7997e0b0b825a27ebc",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;