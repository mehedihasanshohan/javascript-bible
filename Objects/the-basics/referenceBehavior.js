let person1 = { name: "Shohan" };
let person2 = person1;

person2.name = "Mehedi";

console.log(person1.name); // What will it print? > Mehedi
console.log(person2.name); // And this? > Mehedi
