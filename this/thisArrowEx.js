const users = {
  arrowFunc: () => {
    console.log(this.name);
  }
};

users.arrowFunc();
// undefined
// arrow function এর নিজস্ব this নেই
// এটি parent scope (global/window) থেকে this নেয়
// কিন্তু এখানে window.name নেই → তাই undefined



person1= 'shohan';
const user1 = {
  arrowFunc: () => {
    console.log(this.person1);
  }
};
user1.arrowFunc();
// shohan
// because, declare without (let, const, var) makes the variable window scope
// person1 = 'shohan' → implicit global → window.person1 = "shohan"
// arrow function এর this → global object (window)
// তাই this.person1 → window.person1 → "shohan"



let person2 = 'sohan';
const user2 = {
  arrowFunc: () => {
    console.log(this.person2);
  }
};
user2.arrowFunc();
// undefined
// because, declare with let makes the variable global scope
//  but not attached with window object
// let বা const দিয়ে বানানো ভ্যারিয়েবল window object-এর অংশ না
// তাই this.person2 → window.person2 → নেই → undefined



const person3 = 'sohan';
const user3 = {
  arrowFunc: () => {
    console.log(this.person3);
  }
};
user3.arrowFunc();
// undefined
// because, declare with let makes the variable global scope
//  but not attached with window object


myName = "Shohan";

const user = {
  arrowFunc: () => {
    console.log("Arrow:", this.myName);
  },
  normalFunc: function () {
    console.log("Normal:", this.myName);
  }
};

user.arrowFunc();
user.normalFunc();
