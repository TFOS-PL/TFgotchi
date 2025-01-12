let pet = '(=^･ω･^=)';
let health = 100;
let energy = 100;
let cleanliness = 100;

function showPet() {
  document.getElementById('ascii-pet').textContent = pet;
  document.getElementById('health').textContent = health;
  document.getElementById('energy').textContent = energy;
  document.getElementById('cleanliness').textContent = cleanliness;
}

function feedPet() {
  health = Math.min(100, health + 10);
  energy = Math.min(100, energy + 5);
  cleanliness = Math.max(0, cleanliness - 5);
  updateEmotion();
  showPet();
}

function playWithPet() {
  energy = Math.max(0, energy - 10);
  cleanliness = Math.max(0, cleanliness - 10);
  updateEmotion();
  showPet();
}

function cleanPet() {
  cleanliness = Math.min(100, cleanliness + 20);
  updateEmotion();
  showPet();
}

function updateEmotion() {
  if (health < 50 || energy < 50 || cleanliness < 50) {
    pet = '(=･ｪ･=)';
  } else if (health < 20 || energy < 20 || cleanliness < 20) {
    pet = '(=ＴωＴ=)';
  } else {
    pet = '(=^･ω･^=)';
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
}

function submitFeedback() {
  const feedbackInput = document.getElementById('feedback-input').value;
  alert(`Dziękujemy za opinię: "${feedbackInput}"`);
  document.getElementById('feedback-input').value = '';
}

function accessAdmin() {
  if (sessionStorage.getItem('isAdmin')) {
    document.getElementById('admin-tools').style.display = 'block';
  } else {
    const password = prompt('Wprowadź hasło administratora');
    if (password === 'TFosAdMiN') {
      sessionStorage.setItem('isAdmin', true);
      document.getElementById('admin-tools').style.display = 'block';
    } else {
      alert('Błędne hasło!');
    }
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

function playMiniGame() {
  alert('Mini gra w budowie!');
}

document.addEventListener('DOMContentLoaded', () => {
  showPet();
});
