// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Konfiguracja Firebase
const firebaseConfig = {
    apiKey: "TWÓJ_API_KEY",
    authDomain: "TWÓJ_AUTH_DOMAIN",
    databaseURL: "TWÓJ_DATABASE_URL",
    projectId: "TWÓJ_PROJECT_ID",
    storageBucket: "TWÓJ_STORAGE_BUCKET",
    messagingSenderId: "TWÓJ_MESSAGING_SENDER_ID",
    appId: "TWÓJ_APP_ID"
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
