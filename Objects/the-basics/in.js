let user = { name: "Shohan", age: 27 };

console.log( "age" in user ); // true, user.age exists
console.log( "job" in user ); // false, user.job doesn't exist
