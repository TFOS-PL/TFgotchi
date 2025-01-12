let pet = null;
let health = 100;
let energy = 100;
let cleanliness = 100;

const pets = {
  cat: [
    `  /\_/\  \n ( o.o ) \n  > ^ <  `,
    `  /\^/\  \n ( -.- ) \n  > ^ <  `,
  ],
  dog: [
    `  /\\_/\\  \n ( o.o ) \n  (  )  `,
    `  /\\_/\\  \n ( ^.^ ) \n  (  )  `,
  ],
};

function setPet(type) {
  pet = type;
  showPet();
}

function showPet() {
  const petElement = document.getElementById('pet');
  petElement.innerHTML = pets[pet][Math.floor(Math.random() * pets[pet].length)];
  document.getElementById('health').textContent = health;
  document.getElementById('energy').textContent = energy;
  document.getElementById('cleanliness').textContent = cleanliness;
}

function feedPet() {
  if (pet) {
    health = Math.min(100, health + 10);
    energy = Math.min(100, energy + 5);
    cleanliness = Math.max(0, cleanliness - 5);
    showPet();
  }
}

function playWithPet() {
  if (pet) {
    energy = Math.max(0, energy - 10);
    cleanliness = Math.max(0, cleanliness - 10);
    showPet();
  }
}

function cleanPet() {
  if (pet) {
    cleanliness = Math.min(100, cleanliness + 20);
    showPet();
  }
}

function showSection(section) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(`${section}-section`).classList.add('active');
}

function toggleNightMode() {
  document.body.classList.toggle('night-mode');
}

function sendChatMessage() {
  const chatBox = document.getElementById('chat-box');
  const input = document.getElementById('chat-input').value;
  const message = document.createElement('p');
  message.textContent = input;
  chatBox.appendChild(message);
  document.getElementById('chat-input').value = '';
}

function submitFeedback() {
  const feedbackInput = document.getElementById('feedback-input').value;
  alert(`Dziękujemy za opinię: "${feedbackInput}"`);
  document.getElementById('feedback-input').value = '';
}

function adminLogin() {
  const password = prompt('Wprowadź hasło administratora');
  if (password === 'TFosAdMiN') {
    document.getElementById('admin-panel').style.display = 'block';
  } else {
    alert('Błędne hasło!');
  }
}

function authenticateAdmin() {
  const password = document.getElementById('admin-password').value;
  if (password === 'TFosAdMiN') {
    document.getElementById('admin-tools').style.display = 'block';
  } else {
    alert('Błędne hasło!');
  }
}

function increaseHealth() {
  health = Math.min(100, health + 10);
  showPet();
}

function decreaseHealth() {
  health = Math.max(0, health - 10);
  showPet();
}

function increaseEnergy() {
  energy = Math.min(100, energy + 10);
  showPet();
}

function decreaseEnergy() {
  energy = Math.max(0, energy - 10);
  showPet();
}
