// JS Object → JSON String
const obj = { name: "Shohan", age: 22 };
const jsonString = JSON.stringify(obj);
console.log(jsonString);
// Output: {"name":"Shohan","age":22}

// JSON String → JS Object
const data = '{"name":"Shohan","age":22}';
const jsObj = JSON.parse(data);
console.log(jsObj.name);
// Output: Shohan
