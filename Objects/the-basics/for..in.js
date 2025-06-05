// To walk over all keys of an object,
// there exists a special form of the loop:
// for..in.
// This is a completely different thing from the for(;;)
// construct that we studied before.

let user = {
  name: "Shohan",
  age: 26,
  hasJob: false
};

for (let key in user) {
  // keys
  alert( key );  // name, age, hasJob
  // values for the keys
  alert( user[key] ); // Shohan, 26, false
}