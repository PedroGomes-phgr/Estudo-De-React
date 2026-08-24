import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwaIzGhgGQyoPfaw5YGLjMHHXUjD4PYEY",
  authDomain: "miniblog-addab.firebaseapp.com",
  projectId: "miniblog-addab",
  storageBucket: "miniblog-addab.firebasestorage.app",
  messagingSenderId: "1004798936275",
  appId: "1:1004798936275:web:2a463a1c4162dea4928026"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {db, auth};