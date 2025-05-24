function greeting(greet){
  return function(name){
    return `${greet}, s${name}`
  }
}

console.log(greeting("Hello")("Shohan"));

// output: Hello, Shohan 