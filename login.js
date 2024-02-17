// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiHmxYqanjg1nmoqmDbq7qgAGwKTwuo78",
  authDomain: "surface0410-601a6.firebaseapp.com",
  projectId: "surface0410-601a6",
  storageBucket: "surface0410-601a6.appspot.com",
  messagingSenderId: "9599843205",
  appId: "1:9599843205:web:790a393060f57d13c8a2ec",
  measurementId: "G-Q9L27GNZ9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const email = document.getElementById('signInEmail').value;
const password = document.getElementById('signInPassword').value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("로그인");
    // ...

  })
  .catch((error) => {
    console.log("에러");
    const errorCode = error.code;
    const errorMessage = error.message;
  });