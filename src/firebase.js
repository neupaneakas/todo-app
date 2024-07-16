import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBsdvq8w_A1DFRhuzUPAHR2_cCFMhJCIII",
  authDomain: "todo-app-8ffe9.firebaseapp.com",
  projectId: "todo-app-8ffe9",
  storageBucket: "todo-app-8ffe9.appspot.com",
  messagingSenderId: "898006084219",
  appId: "1:898006084219:web:3bd0daf9af8b3ee54fd0de"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);