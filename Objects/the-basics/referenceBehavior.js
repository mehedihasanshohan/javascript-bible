let person1 = { name: "Shohan" };
let person2 = person1;

person2.name = "Mehedi";

console.log(person1.name); // What will it print? > Mehedi
console.log(person2.name); // And this? > Mehedi


// Question: Why do both show "Mehedi"?

// answer: Because person1 and person2 both point to
// the same object in memory.
// let person2 = person1;
// This doesn't copy the object —
// it just copies the reference (the memory address).
// So when you do:
// person2.name = "Mehedi";
// You're actually changing the same object
// that person1 also refers to.


let user = { name: 'Shohan' };

let job = user;

admin.name = 'developer'; // changed by the "job" reference

alert(user.name); // 'developer', changes are seen from the "user" reference

// It’s as if we had a cabinet with two keys
//  and used one of them (admin) to get into it
//  and make changes. Then,
//  if we later use another key (user),
//  we are still opening the same cabinet
//  and can access the changed contents.
