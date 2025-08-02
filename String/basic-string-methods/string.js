// 1.length
const name = 'Mehedi Hasan Shohan';
console.log(name.length); // 19
console.log(name[2]); // h
console.log(name.charAt(2)); // h
console.log(name.toUpperCase()); // MEHEDI HASAN SHOHAN
console.log(name.toLowerCase()); // mehedi hasan shohan

// 2.Remove whitespace
const nameWithSpaces = '   Mehedi Hasan Shohan   ';
console.log(nameWithSpaces); // '   Mehedi Hasan Shohan   '
console.log(nameWithSpaces.trimStart()); // 'Mehedi Hasan Shohan   '
console.log(nameWithSpaces.trimEnd()); // '   Mehedi Hasan Shohan'
console.log(nameWithSpaces.trim()); // 'Mehedi Hasan Shohan'