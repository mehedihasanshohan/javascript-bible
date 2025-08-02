// challenge-1: reverse a string
const text = 'Mehedi Hasan Shohan';
const reversedText = text.split('').reverse().join('');
console.log(reversedText); // nahohS nasaH ideheM

// challenge-2: reverse a string without using built-in methods
// Using a loop to reverse the string
const name = 'Mehedi Hasan Shohan';
const newText =[];
 for (let i = name.length - 1; i >= 0; i--) {
    newText.push(name[i]);
 }
const reversedName = newText.join('');
console.log(reversedName); // nahohS nasaH ideheM

//challenge-3: count words in a string(single word or multiple words)
const sentence = 'I love JavaScript and I am learning it';
 const sentenceWords = sentence.split(' ');
const wordCount = sentenceWords.length;
console.log(`The sentence has ${wordCount} words.`); // The sentence has 9 words.

//count valid words in a string
const randomSentence = 'I love JavaScript and I am learning it';
const validWords = randomSentence.split(' ');
console.log(validWords);
const validWordArray = [];
for (let i = 0; i < validWords.length; i++) {
  if(validWords[i].length > 1) {
    validWordArray.push(validWords[i]);
  }
}
console.log(validWordArray.length);


//challenge-4: count vowels in a string
const textWithVowels = 'Mehedi Hasan Shohan';
const vowels = [];
for (let i = 0; i < textWithVowels.length; i++) {
  const char = textWithVowels[i].toLowerCase();
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    vowels.push(char);
  }
}
console.log(`The number of vowels in the (${textWithVowels}) is: ${vowels.length}`); // The number of vowels in the string is: 6