/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

Use console.log() at the end of the sum() function to print result.
Use ES6 whenever possible.
*/

"use strict";

// Write code here
function sum(){
  var res = 0
  for (let value of arguments) {
    res += value
  }
  console.log(res);
}

sum(1, 3);
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
//110
