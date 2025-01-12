// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBeYY5ZYJiE8nkKqr874ZpMJo1BTtq3YZM",
  authDomain: "tfgotchi.firebaseapp.com",
  projectId: "tfgotchi",
  storageBucket: "tfgotchi.appspot.com",
  messagingSenderId: "835432240305",
  appId: "1:835432240305:web:9f01587a9749a45053be90",
  measurementId: "G-XB1VWX1K55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Eksport aplikacji Firebase
export { app, analytics };
