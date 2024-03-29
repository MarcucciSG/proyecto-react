import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mi-tientareactjs.firebaseapp.com",
  projectId: "mi-tientareactjs",
  storageBucket: "mi-tientareactjs.appspot.com",
  messagingSenderId: "718209696478",
  appId: "1:718209696478:web:9e693405df8c9575a7384f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
