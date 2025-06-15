let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}



// outputs =>
// wrong
// "Why don't you take a math class?


// Now both 3 and 5 show the same message.
// The ability to “group” cases is a side
//  effect of how switch/case works without break.
// Here the execution of case 3 starts from the
//  line (*) and goes through case 5, because there’s no break.
