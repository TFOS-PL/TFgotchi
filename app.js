document.addEventListener("DOMContentLoaded", function() {
    // Zmienne do przechowywania danych
    const sendMessageBtn = document.getElementById("sendMessageBtn");
    const sendAdminMessageBtn = document.getElementById("sendAdminMessageBtn");
    const sendOpinionBtn = document.getElementById("sendOpinionBtn");
    const messageInput = document.getElementById("messageInput");
    const messagesContainer = document.getElementById("messagesContainer");
    const opinionInput = document.getElementById("opinionInput");
    const opinionList = document.getElementById("opinionList");
    const gameSection = document.getElementById("gameSection");
    const chatSection = document.getElementById("chatSection");
    const opinionSection = document.getElementById("opinionSection");
    const adminControls = document.getElementById("adminControls");
    
    const tamagotchiStatus = document.getElementById("tamagotchiStatus");
    const feedBtn = document.getElementById("feedBtn");
    const playBtn = document.getElementById("playBtn");
    const cleanBtn = document.getElementById("cleanBtn");

    let isAdmin = false;
    let tamagotchiHealth = 100;
    let messages = [];
    let opinions = [];

    // Funkcje do wyświetlania
    function displayMessages() {
        messagesContainer.innerHTML = '';
        messages.forEach((message, index) => {
            const messageDiv = document.createElement('div');
            messageDiv.innerHTML = `<strong>${message.user}</strong>: ${message.text}`;
            messagesContainer.appendChild(messageDiv);
        });
    }

    function displayOpinions() {
        opinionList.innerHTML = '';
        opinions.forEach(opinion => {
            const opinionDiv = document.createElement('div');
            opinionDiv.innerHTML = `<p>${opinion}</p>`;
            opinionList.appendChild(opinionDiv);
        });
    }

    // Funkcje czatu
    sendMessageBtn.addEventListener("click", function() {
        const messageText = messageInput.value;
        if (messageText) {
            messages.push({ user: "Użytkownik", text: messageText });
            messageInput.value = '';
            displayMessages();
        }
    });

    sendAdminMessageBtn.addEventListener("click", function() {
        const adminMessageText = document.getElementById("adminMessage").value;
        if (adminMessageText) {
            messages.push({ user: "Administrator", text: adminMessageText });
            document.getElementById("adminMessage").value = '';
            displayMessages();
        }
    });

    // Funkcja dodawania opinii
    sendOpinionBtn.addEventListener("click", function() {
        const opinionText = opinionInput.value;
        if (opinionText) {
            opinions.push(opinionText);
            opinionInput.value = '';
            displayOpinions();
        }
    });

    // Funkcja gry Tamagotchi
    feedBtn.addEventListener("click", function() {
        tamagotchiHealth += 10;
        if (tamagotchiHealth > 100) tamagotchiHealth = 100;
        document.getElementById("tamagotchiHealth").innerText = `Zdrowie: ${tamagotchiHealth}`;
    });

    playBtn.addEventListener("click", function() {
        tamagotchiHealth += 5;
        if (tamagotchiHealth > 100) tamagotchiHealth = 100;
        document.getElementById("tamagotchiHealth").innerText = `Zdrowie: ${tamagotchiHealth}`;
    });

    cleanBtn.addEventListener("click", function() {
        tamagotchiHealth -= 5;
        if (tamagotchiHealth < 0) tamagotchiHealth = 0;
        document.getElementById("tamagotchiHealth").innerText = `Zdrowie: ${tamagotchiHealth}`;
    });

    // Funkcja logowania
    const adminCode = prompt("Wprowadź kod administratora:");
    if (adminCode === "HASLO_ADMINA_PLACEHOLDER") {
        isAdmin = true;
        adminControls.style.display = "block"; // Wyświetlanie panelu admina
    }

    // Przełączanie zakładek
    document.getElementById("chatTab").addEventListener("click", function() {
        chatSection.style.display = "block";
        gameSection.style.display = "none";
        opinionSection.style.display = "none";
    });

    document.getElementById("gameTab").addEventListener("click", function() {
        gameSection.style.display = "block";
        chatSection.style.display = "none";
        opinionSection.style.display = "none";
    });

    document.getElementById("opinionTab").addEventListener("click", function() {
        opinionSection.style.display = "block";
        chatSection.style.display = "none";
        gameSection.style.display = "none";
    });
});
