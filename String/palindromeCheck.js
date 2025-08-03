const text = 'Mehedi Hasan Shohan';
const reversedText = text.split('').reverse().join('');
console.log(reversedText); // nahohS nasaH ideheM

if (text === reversedText) {
    console.log("The string is a palindrome.");
} else {
    console.log(` ${text}- is not a palindrome word.`);
}

//  palindrome check using a function
const isPalindrome = (str) => {
  const lowerCase = str.toLowerCase();
  const reversedStr = lowerCase.split('').reverse().join('');
  if (lowerCase === reversedStr) {
    console.log("The string is a palindrome.");
  } else {
    console.log(` ${str} - is not a palindrome word.`);
  }
}



// multiple words palindrome check using function
const isArrayPalindrome = (word) => {
  const lowerCase = word.toLowerCase();
  const reversedStr = lowerCase.split('').reverse().join('');
  if (lowerCase === reversedStr) {
    console.log(`${word} - is a palindrome word.`);
  } else {
    console.log(` ${word} - is not a palindrome word.`);
  }
}


const array = ['shohan', 'rotator', 'level', 'mom', 'dad', 'Mehedi Hasan Shohan'];
 for (let i = 0; i < array.length; i++) {
    isArrayPalindrome(array[i]);
  }
