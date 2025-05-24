function createAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) balance += amount;
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
      } else {
        alert("Insufficient balance!");
      }
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createAccount(0);

// DOM Elements
const balanceDisplay = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("deposit");
const withdrawBtn = document.getElementById("withdraw");

function updateBalance() {
  balanceDisplay.textContent = "$" + account.getBalance();
}

depositBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  account.deposit(amount);
  updateBalance();
  amountInput.value = "";
});

withdrawBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  account.withdraw(amount);
  updateBalance();
  amountInput.value = "";
});

updateBalance();
