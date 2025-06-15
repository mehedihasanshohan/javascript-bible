let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}


// outputs=>
// Exactly
// Too big
//  i dont know such values

// If there is no break then the execution continues with the next case without any checks.
