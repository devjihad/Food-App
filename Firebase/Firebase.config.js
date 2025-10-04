// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx9t30naJDmcMm08afNcwm98tnmmwYzZg",
  authDomain: "food-app-ae03f.firebaseapp.com",
  projectId: "food-app-ae03f",
  storageBucket: "food-app-ae03f.firebasestorage.app",
  messagingSenderId: "506809452930",
  appId: "1:506809452930:web:c3123bd11cf8586b63a79b"
};

// Initialize Firebase
const appe = initializeApp(firebaseConfig);
export default appe;