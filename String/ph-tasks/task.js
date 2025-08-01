
// Task-1: Count how many times a string has the letter a
const myName= "mehedi hasan shohan";

let count =0;

for (let letter of myName) {
    if (letter=== 'a') {
         count++;
    }
}
console.log(count);



// Task-2: Count how many times a string has the letter a or A
const text = "JavaScript is Amazing";
let count2 = 0;

for (let char of text) {
  if (char === 'a' || char === 'A') {
    count++;
  }
}

console.log(`Task-2: 'a' or 'A' found ${count} times.`);



// Task -3: Check whether a string contains all the vowels a, e, i, o, u







// Task-4 : // Replace all occurrences of 'x' with 'y' and 'X' with 'Y' in a string
const text4 = "xxXX";

const replaced4 = text4.replace(/x/g, 'y').replace(/X/g, 'Y');

console.log(replaced4); // Output: "yyYY"

// using includes
const textt = "eXample with x and X";
let replaced = textt;

if (textt.includes('x') || textt.includes('X')) {
  replaced = textt.replace(/x/g, 'y').replace(/X/g, 'Y');
  console.log("Replaced text:", replaced);
} else {
  console.log("No 'x' or 'X' found in the string.");
}
// output: "Replaced text: eYample with y and Y"





// Task-5 : Capitalize Every First Letter of Each Word

// basic use of charAt
const name = "Mehedi";
console.log(name.charAt(0)); // Output: "M"
console.log(name.charAt(3)); // Output: "e"

// একটি স্ট্রিং নিই
const sentence = "my name is mehedi hasan shohan";

// স্ট্রিংটিকে স্পেস দিয়ে ভাগ করি (split করি) — যাতে প্রতিটি শব্দ আলাদা হয়
const words = sentence.split(" "); // ["my", "name", "is", "mehedi"]

// নতুন স্ট্রিং রাখার জন্য একটি খালি ভেরিয়েবল নেই
let capitalizedSentence = "";

// প্রতিটি শব্দের উপর লুপ চালাই
for (let i = 0; i < words.length; i++) {
  const word = words[i]; // বর্তমান শব্দটি নেই, যেমন: "my"

  // প্রথম অক্ষর বড় করে নেই + বাকি অংশ আগের মতো রাখি
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

  // বড় করা শব্দটিকে নতুন স্ট্রিংয়ের সাথে যোগ করি (একটা স্পেস সহ)
  capitalizedSentence += capitalizedWord + " ";
}

// শেষে স্ট্রিং-এর শুরু/শেষে যদি অতিরিক্ত স্পেস থাকে, সেটা বাদ দিই (trim)
console.log(capitalizedSentence.trim()); // Output: "My Name Is Mehedi Hasan Shohan"
