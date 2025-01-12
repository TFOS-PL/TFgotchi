// firebase-config.js
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeYY5ZYJiE8nkKqr874ZpMJo1BTtq3YZM",
  authDomain: "tfgotchi.firebaseapp.com",
  projectId: "tfgotchi",
  storageBucket: "tfgotchi.firebasestorage.app",
  messagingSenderId: "835432240305",
  appId: "1:835432240305:web:9f01587a9749a45053be90",
  measurementId: "G-XB1VWX1K55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
