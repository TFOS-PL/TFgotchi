document.addEventListener("DOMContentLoaded", function() {
    const newGameBtn = document.getElementById("newGameBtn");

    // Funkcja resetująca stan gry
    function resetGame() {
        gameData = {
            animal: "Kot", // Zmiana zwierzęcia, możesz dodać możliwość wyboru
            hunger: 50,
            cleanliness: 100,
            points: 0,
            gameCode: generateGameCode() // Generowanie nowego kodu gry
        };

        updateGameScreen(); // Zaktualizuj ekran gry
    }

    // Funkcja generująca unikalny kod gry
    function generateGameCode() {
        return "TF" + Math.floor(Math.random() * 1000000); // Prosty sposób generowania kodu
    }

    // Funkcja do aktualizacji danych na ekranie gry
    function updateGameScreen() {
        document.getElementById("points").innerText = "Punkty: " + gameData.points;
        document.getElementById("animal").innerText = "Zwierzę: " + gameData.animal;
        document.getElementById("hunger").innerText = "Głód: " + gameData.hunger;
        document.getElementById("cleanliness").innerText = "Czystość: " + gameData.cleanliness;
    }

    // Nasłuchiwanie kliknięcia przycisku "Nowa gra"
    newGameBtn.addEventListener("click", function() {
        resetGame(); // Resetuje stan gry i generuje nowy kod
        alert("Nowa gra rozpoczęta! Twój kod gry: " + gameData.gameCode); // Informuje o rozpoczęciu gry
    });
});
