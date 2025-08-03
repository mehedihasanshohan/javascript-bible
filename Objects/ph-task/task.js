// Task-1: Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors["golden rod"]); // Output: #daa520



// Task-2: Add a new property to the car object and log its value.

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car.passenger= 5;
console.log(car.passenger); // Output: 5


// task-3: Display the marks of the physics subject from the student object.
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks); // Output: 30



// Task- 4: Count the number of properties in an object.
let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(Object.keys(student1).length); // Output: [ 'name', 'age', 'city', 'isStudent' ]


// Task- 5:
let myObject = {
      name: 'John Doe',
      age: 25,
      city: 'Example City',
      isStudent: true
};
for (let key in myObject) {
    console.log('key:' +  key  + '|'  + 'type:' + typeof(myObject[key]));
}
// Output:
// key:name|type:string
// key:age|type:number
// key:city|type:string
// key:isStudent|type:boolean


// Task-6: loop through an object and log its keys and values.
const profile = {
    name: 'shohan',
    age: 25,
    isStdnt: true,
}
for (let key in profile){
    console.log(key + ':' + profile[key]);
}
// Output:
// name:shohan
// age:25
// isStdnt:true