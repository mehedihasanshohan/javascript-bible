const text = 'Mehedi Hasan Shohan';
const reversedText = text.split('').reverse().join('');
console.log(reversedText); // nahohS nasaH ideheM

if (text === reversedText) {
    console.log("The string is a palindrome.");
} else {
    console.log(` ${text}- is not a palindrome word.`);
}