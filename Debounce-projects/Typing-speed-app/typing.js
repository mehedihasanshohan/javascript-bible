const promptText = document.getElementById('prompt');
const input = document.getElementById('input');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const timeDisplay = document.getElementById('time');
const restartBtn = document.getElementById('restart');

const prompts = [
  "JavaScript is the language of the web.",
  "Frontend development includes HTML, CSS, and JavaScript.",
  "Debounce helps limit function calls.",
  "Typing fast improves your workflow.",
  "Coding challenges sharpen your skills."
];

let currentPrompt = '';
let startTime = null;
let interval;
let debounceTimer;

function loadPrompt() {
  currentPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  promptText.textContent = currentPrompt;
  input.value = '';
  startTime = null;
  timeDisplay.textContent = '0';
  wpmDisplay.textContent = '0';
  accuracyDisplay.textContent = '100';
  clearInterval(interval);
}

function calculateStats() {
  const typed = input.value;
  const timeTaken = (Date.now() - startTime) / 1000;
  const wordsTyped = typed.trim().split(/\s+/).length;
  const wpm = Math.round((wordsTyped / timeTaken) * 60);
  wpmDisplay.textContent = isNaN(wpm) ? '0' : wpm;

  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === currentPrompt[i]) correct++;
  }
  const accuracy = Math.round((correct / currentPrompt.length) * 100);
  accuracyDisplay.textContent = accuracy;
}

input.addEventListener('input', () => {
  if (!startTime) {
    startTime = Date.now();
    interval = setInterval(() => {
      const timePassed = Math.floor((Date.now() - startTime) / 1000);
      timeDisplay.textContent = timePassed;
    }, 1000);
  }

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(calculateStats, 500);
});

restartBtn.addEventListener('click', () => {
  loadPrompt();
});

loadPrompt();
