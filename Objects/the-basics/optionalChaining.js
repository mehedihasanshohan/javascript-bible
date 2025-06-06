let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
// Please note: the ?. syntax makes optional the value before it, but not any further.

// E.g. in user?.address.street.name the ?. allows user to safely be null/undefined (and returns undefined in that case), but that’s only for user. Further properties are accessed in a regular way. If we want some of them to be optional, then we’ll need to replace more . with ?..
