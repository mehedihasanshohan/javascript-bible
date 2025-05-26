// একটি সাধারণ অবজেক্ট
let animal = {
  eats: true,
  walk() {
    console.log("Animal is walking");
  }
};

// আরেকটি অবজেক্ট তৈরি করছি যা animal থেকে প্রোটোটাইপ ইনহেরিট করে
let rabbit = {
  jumps: true,
  __proto__: animal
};

// rabbit এর নিজস্ব প্রপার্টি
console.log(rabbit.jumps); // true

// rabbit এর নিজস্ব walk() নেই, তাই এটি animal থেকে নেয়
rabbit.walk(); // Animal is walking

// rabbit এর নিজস্ব eats নেই, animal থেকে নেয়
console.log(rabbit.eats); // true
