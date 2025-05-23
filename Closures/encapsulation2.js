function secretNumber() {
  let number = 42; // ⛔ বাইরের কেউ এটা দেখতে পারবে না

  return function() {
    return number;
  };
}

const getSecret = secretNumber();

console.log(getSecret()); // ✅ 42
console.log(getSecret.number); // ❌ undefined
