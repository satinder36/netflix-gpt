// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrnwFqIuktWNx8ju_G8dNlAQGTRw63YZk",
  authDomain: "netflixgpt-9eb8e.firebaseapp.com",
  projectId: "netflixgpt-9eb8e",
  storageBucket: "netflixgpt-9eb8e.appspot.com",
  messagingSenderId: "803766662542",
  appId: "1:803766662542:web:523ee9dd863508ccf7e0df",
  measurementId: "G-X6CSBDXL3E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
