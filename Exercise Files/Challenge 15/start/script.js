/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// Write code here
// vowels.forEach((vowel) => {
//   vowelsCount += (str.match(new RegExp(vowel, 'g')) || []).length
// })

for(let s of str){
  if(vowels.includes(s)) vowelsCount++;
}


console.log(vowelsCount);
// 8
