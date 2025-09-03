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


fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => d(json))

const d = (datas) => {
    datas.forEach(data=>console.log(data))
}
// Output: { userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit...
//         { userId: 1, id: 2, title: 'qui est esse', body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat...
//         { userId: 1, id: 3, title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'et iusto sed quo iure\nvoluptatem occaecati...
