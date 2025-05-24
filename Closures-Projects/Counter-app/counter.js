// closure function here
function createCounter() {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0),
    getValue: () => count
  };
}

const counter = createCounter();

const countEl = document.getElementById('count');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

incBtn.addEventListener('click', () => {
  countEl.textContent = counter.increment();
});

decBtn.addEventListener('click', () => {
  countEl.textContent = counter.decrement();
});

resetBtn.addEventListener('click', () => {
  countEl.textContent = counter.reset();
});
