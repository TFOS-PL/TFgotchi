// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBeYY5ZYJiE8nkKqr874ZpMJo1BTtq3YZM",
  authDomain: "tfgotchi.firebaseapp.com",
  projectId: "tfgotchi",
  storageBucket: "tfgotchi.appspot.com",
  messagingSenderId: "835432240305",
  appId: "1:835432240305:web:9f01587a9749a45053be90",
  measurementId: "G-XB1VWX1K55"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Zmienne dla zwierzaków
let pet = null;
let emotions = ['radość', 'smutek', 'gniew', 'spokój'];
let currentEmotion = 0;

// Funkcje dla gry
function selectPet(type) {
    if (type === 'cat') {
        pet = "Kot";
        document.getElementById('pet-area').innerHTML = '<pre>  /\_/\  \n ( o.o ) \n  > ^ <  </pre>';
    } else if (type === 'dog') {
        pet = "Pies";
        document.getElementById('pet-area').innerHTML = '<pre> / \_/\\  \n( o.o ) \n > ^ < </pre>';
    }
}

function feedPet() {
    alert(pet + " został nakarmiony!");
}

function playWithPet() {
    alert(pet + " bawi się!");
}

function cleanPet() {
    alert(pet + " posprzątał!");
}

function changePetEmotion() {
    currentEmotion = (currentEmotion + 1) % emotions.length;
    alert(pet + " ma teraz emocję: " + emotions[currentEmotion]);
}

// Funkcje administracyjne
function openAdminPanel() {
    document.getElementById('admin-panel').style.display = 'block';
}

function checkAdminPassword() {
    const enteredPassword = document.getElementById('admin-password').value;
    if (enteredPassword === "TFosAdMiN") {
        document.getElementById('admin-actions').style.display = 'block';
    } else {
        alert("Niepoprawne hasło!");
    }
}

function resetGameData() {
    alert("Dane gry zostały zresetowane.");
}

function viewStatistics() {
    alert("Zobacz statystyki użytkowników");
}

// Czat
function sendMessage() {
    const message = document.getElementById('message-input').value;
    if (message) {
        const messageContainer = document.createElement('div');
        messageContainer.textContent = message;
        document.getElementById('messages').appendChild(messageContainer);

        // Zapisywanie wiadomości do Firebase
        db.collection('messages').add({
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        document.getElementById('message-input').value = ''; // Clear input
    }
}

// Pobieranie wiadomości z Firebase
db.collection('messages').orderBy('timestamp', 'asc').onSnapshot((querySnapshot) => {
    document.getElementById('messages').innerHTML = ''; // Clear existing messages
    querySnapshot.forEach(doc => {
        const messageContainer = document.createElement('div');
        messageContainer.textContent = doc.data().message;
        document.getElementById('messages').appendChild(messageContainer);
    });
});