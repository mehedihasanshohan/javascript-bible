
// Currying function
const greet = lang => time => name => {
  const messages = {
    en: {
      morning: "Good morning",
      evening: "Good evening"
    },
    bn: {
      morning: "শুভ সকাল",
      evening: "শুভ সন্ধ্যা"
    }
  };

  return `${messages[lang][time]}, ${name}!`;
};

// DOM interaction
const languageSelect = document.getElementById('language');
const timeSelect = document.getElementById('time');
const nameInput = document.getElementById('name');
const output = document.getElementById('output');
const button = document.getElementById('generate');

button.addEventListener('click', () => {
  const lang = languageSelect.value;
  const time = timeSelect.value;
  const name = nameInput.value.trim();

  if (name) {
    const message = greet(lang)(time)(name);
    output.textContent = message;
  } else {
    output.textContent = "Please enter your name.";
  }
});

