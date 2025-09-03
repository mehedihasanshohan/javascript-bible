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



fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
    // Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }