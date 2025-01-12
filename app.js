// app.js
import { getDatabase, ref, set, get, child } from "firebase/database";

// Inicjalizacja Firebase
const db = getDatabase(app);

// Zmienna przechowująca dane gry
let gameData = {
    animal: 'kot',
    hunger: 50,
    cleanliness: 100,
    points: 10
};

// Funkcja do zapisywania danych gry
function saveGame() {
    const gameCode = btoa(JSON.stringify(gameData)); 
    const userId = "user123";  // Możesz użyć dynamicznego ID, jeśli chcesz
    set(ref(db, 'games/' + userId), {
        gameCode: gameCode
    }).then(() => {
        alert('Gra została zapisana!');
    }).catch((error) => {
        console.error('Błąd zapisu gry:', error);
    });
}

// Funkcja do ładowania danych gry
function loadGame() {
    const gameCodeInput = document.getElementById('gameCodeInput').value;
    const userId = "user123"; // Możesz użyć dynamicznego ID, jeśli chcesz

    get(child(ref(db), 'games/' + userId)).then((snapshot) => {
        if (snapshot.exists()) {
            const gameDataFromDB = JSON.parse(atob(snapshot.val().gameCode));
            document.getElementById('chosen-animal').textContent = gameDataFromDB.animal;
            document.getElementById('hunger').textContent = gameDataFromDB.hunger;
            document.getElementById('cleanliness').textContent = gameDataFromDB.cleanliness;
            document.getElementById('points').textContent = gameDataFromDB.points;
        } else {
            alert('Nie znaleziono danych gry dla tego kodu!');
        }
    }).catch((error) => {
        console.error('Błąd wczytywania TFgotchi:', error);
    });
}
