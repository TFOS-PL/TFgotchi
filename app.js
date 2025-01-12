// Statystyki zwierzaka
let hunger = 50;
let happiness = 50;
let cleanliness = 50;

// Admin hasło
const ADMIN_PASSWORD = "TFosAdMiN";

// Wyświetlanie panelu administratora
function openAdminPanel() {
  document.getElementById("admin-panel").style.display = "block";
}

// Ukrywanie panelu administratora
function closeAdminPanel() {
  document.getElementById("admin-panel").style.display = "none";
}

// Walidacja administratora
function validateAdmin() {
  const password = document.getElementById("admin-password").value;
  if (password === ADMIN_PASSWORD) {
    document.getElementById("admin-tools").style.display = "block";
  } else {
    alert("Nieprawidłowe hasło!");
  }
}

// Aktualizacja statystyk przez administratora
function updateStatsAsAdmin() {
  const newHunger = document.getElementById("admin-hunger").value;
  const newHappiness = document.getElementById("admin-happiness").value;
  const newCleanliness = document.getElementById("admin-cleanliness").value;

  if (newHunger !== "") hunger = parseInt(newHunger);
  if (newHappiness !== "") happiness = parseInt(newHappiness);
  if (newCleanliness !== "") cleanliness = parseInt(newCleanliness);

  document.getElementById("hunger").innerText = hunger;
  document.getElementById("happiness").innerText = happiness;
  document.getElementById("cleanliness").innerText = cleanliness;

  alert("Zaktualizowano statystyki zwierzaka!");
}

// Nakarm zwierzę
function feed() {
  hunger = Math.min(hunger + 10, 100);
  document.getElementById("hunger").innerText = hunger;
}

// Pobaw się ze zwierzęciem
function play() {
  happiness = Math.min(happiness + 10, 100);
  document.getElementById("happiness").innerText = happiness;
}

// Sprzątnij po zwierzęciu
function clean() {
  cleanliness = Math.min(cleanliness + 10, 100);
  document.getElementById("cleanliness").innerText = cleanliness;
}
