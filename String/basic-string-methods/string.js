// 1.length
const name = 'Mehedi Hasan Shohan';
console.log(name.length); // 19
console.log(name[2]); // h
console.log(name.charAt(2)); // h
console.log(name.toUpperCase()); // MEHEDI HASAN SHOHAN
console.log(name.toLowerCase()); // mehedi hasan shohan

// 2.Remove whitespace
const nameWithSpaces = '   Mehedi Hasan Shohan   ';
console.log(nameWithSpaces);              // '   Mehedi Hasan Shohan   '
console.log(nameWithSpaces.trimStart());  // 'Mehedi Hasan Shohan   '
console.log(nameWithSpaces.trimEnd());    // '   Mehedi Hasan Shohan'
console.log(nameWithSpaces.trim());      // 'Mehedi Hasan Shohan'

// 3.includes
const sentence = 'I love JavaScript';
console.log(sentence.includes('love')); // true
console.log(sentence.includes('Python')); // false

// 4.slice(start, end)
const text = 'Mehedi Hasan Shohan';
console.log(text.slice(0, 6)); // Mehedi
console.log(text.slice(0, 12)); // Mehedi Hasan
console.log(text.slice(7)); // Hasan Shohan
console.log(text.slice(12)); // Shohan
console.log(text.slice(-6)); // Shohan
console.log(text.slice(-12, -6)); // Hasan


// 5. string.replace(searchValue, replaceValue)( replace() methods ignore case)
const greeting = 'Hello World';
console.log(greeting.replace('World', 'JavaScript')); // Hello JavaScript

// only replaces the first occurrence
const fruits = "Apple, Banana, Apple";
console.log(fruits.replace("Apple", "Mango")); // Output: "Mango, Banana, Apple"

//replace all occurrences(use regular expression with global flag)
const fruitsAll = "Apple, Banana, Apple";
console.log(fruitsAll.replace(/Apple/g, "Mango")); // Output: "Mango, Banana, Mango"



// 6.split(separator, limit)
//  i) space
    const spaceText = "Ami Bangladesh ke valobashi";
    console.log(spaceText.split(" "));
    // Output: ["Ami", "Bangladesh", "ke", "valobashi"]

    // ii) character
    const charText = "Mehedi Hasan Shohan";
    console.log(charText.split("a"));
    // Output: ["Mehedi H", "s", "n Shoh", "n"]

    // iii) empty string (separates each character)
    const emptytext = "hello";
    console.log(emptytext.split(""));
    // Output: ["h", "e", "l", "l", "o"]

    // iv) pipe ( | )
    const items = "pen|book|pencil";
    console.log(items.split("|"));
    // Output: ["pen", "book", "pencil"]



