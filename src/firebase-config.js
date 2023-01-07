import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB58TLakkIGo2N8PKvxolekbTb2yehlqP0",
  authDomain: "attendance-assignment.firebaseapp.com",
  projectId: "attendance-assignment",
  storageBucket: "attendance-assignment.appspot.com",
  messagingSenderId: "572683916853",
  appId: "1:572683916853:web:83e8e6dc228b47fc73437c",
  measurementId: "G-4VKMP1WTL3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
