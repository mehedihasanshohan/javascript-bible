function sayHi() {
  alert(this);
}

sayHi(); // undefined

// Calling without an object: this == undefined