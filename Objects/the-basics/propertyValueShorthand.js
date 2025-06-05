function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

// In the example above,
// properties have the same names as variables.
// The use-case of making a property from a variable is so common,
// that there’s a special property value shorthand to make it shorter.
