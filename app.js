import { database } from "./firebase-config.js";
import { ref, set, get } from "firebase/database";

const loginScreen = document.getElementById("login-screen");
const gameScreen = document.getElementById("game-screen");
const gameCodeInput = document.getElementById("gameCodeInput");
const loadGameBtn = document.getElementById("loadGameBtn");
const newGameBtn = document.getElementById("newGameBtn");
const chosenAnimal = document.getElementById("chosen-animal");
const hungerDisplay = document.getElementById("hunger");
const cleanlinessDisplay = document.getElementById("cleanliness");
const pointsDisplay = document.getElementById("points");
const feedBtn = document.getElementById("feedBtn");
const cleanBtn = document.getElementById("cleanBtn");
const playBtn = document.getElementById("playBtn");
const saveGameBtn = document.getElementById("saveGameBtn");
const logoutBtn = document.getElementById("logoutBtn");
const gameCodeDisplay = document.getElementById("generatedCode");

let gameData = {
    animal: "Kot",
    hunger: 50,
    cleanliness: 100,
    points: 0
};
let currentGameCode = "";

// Generowanie nowego kodu gry
function generateGameCode() {
    return "TFG-" + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Załaduj grę z Firebase
async function loadGame(code) {
    const gameRef = ref(database, `games/${code}`);
    const snapshot = await get(gameRef);

    if (snapshot.exists()) {
        gameData = snapshot.val();
        currentGameCode = code;
        updateGameScreen();
        showScreen("game-screen");
    } else {
        alert("Nie znaleziono gry!");
    }
}

// Zapisz grę do Firebase
function saveGame() {
    const gameRef = ref(database, `games/${currentGameCode}`);
    set(gameRef, gameData);
    alert("Gra zapisana!");
}

// Aktualizacja interfejsu gry
function updateGameScreen() {
    chosenAnimal.textContent = gameData.animal;
    hungerDisplay.textContent = gameData.hunger;
    cleanlinessDisplay.textContent = gameData.cleanliness;
    pointsDisplay.textContent = gameData.points;
    gameCodeDisplay.textContent = currentGameCode;
}

// Pokaż ekran
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
}

// Obsługa przycisków
loadGameBtn.addEventListener("click", () => {
    const code = gameCodeInput.value.trim();
    if (code) loadGame(code);
});
newGameBtn.addEventListener("click", () => {
    currentGameCode = generateGameCode();
    gameData = { animal: "Kot", hunger: 50, cleanliness: 100, points: 0 };
    updateGameScreen();
    showScreen("game-screen");
});
feedBtn.addEventListener("click", () => {
    gameData.hunger = Math.max(0, gameData.hunger - 10);
    gameData.points += 5;
    updateGameScreen();
});
cleanBtn.addEventListener("click", () => {
    gameData.cleanliness = Math.min(100, gameData.cleanliness + 10);
    gameData.points += 5;
    updateGameScreen();
});
playBtn.addEventListener("click", () => {
    gameData.points += 10;
    updateGameScreen();
});
saveGameBtn.addEventListener("click", saveGame);
logoutBtn.addEventListener("click", () => showScreen("login-screen"));
