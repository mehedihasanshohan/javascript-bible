// Bracket notation (obj["key"] or obj[varKey]) →
// use when the property name is dynamic, has spaces, special characters, or starts with a number.


const user = {
  name: "Shohan",
  "fav-color": "blue"
};

console.log(user.name);           // Dot
console.log(user["fav-color"]);   // Bracket

let key = "name";
console.log(user[key]);           // Bracket for dynamic
// console.log(user.key);         // Dot for dynamic  (undefined)

// Example with special characters and spaces
const product = {
  "product name": "Laptop",
  "price($)": 1000
};

console.log(product["product name"]); // Bracket
console.log(product["price($)"]);     // Bracket


// numaric property
const data = {
  123: "test",
  456: "hello"
};

console.log(data[123]);      // "test"  (auto converted to string)
console.log(data["456"]);    // "hello"
// console.log(data.123);      // Syntax Error

// dynamic property access
  const user2 = { name: "Shohan", age: 22 };

let key2 = "age";
console.log(user2[key2]); // 22


// nested access
const dataa = {
  user: {
    profile: {
      "full name": "Mehedi Hasan Shohan"
    }
  }
};

console.log(dataa["user"]["profile"]["full name"]); // "Mehedi Hasan Shohan"
console.log(dataa.user.profile["full name"]);      // "Mehedi Hasan Shohan"
// console.log(dataa.user.profile.full name);         // Syntax Error