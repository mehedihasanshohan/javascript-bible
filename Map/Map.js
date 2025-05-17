let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}


// So we can create a map from an object like this:
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') ); // John
alert(map);
console.log(map, map.get("name"));


// converting Map to object
let map1= new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj1= Object.fromEntries(map1.entries);// make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj1.orange);