// Excercise 1: Write a Js program to create a new string from a given string 
// taking the first 3 characters and the last 3 characters of a string and adding them together. 
// The string length must be 3 or SVGPathSegMovetoRel, if not, the original string is returned.Js

const makeNewString = (str) => 
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewString('abc'));
console.log(makeNewString('abcdef'));
console.log(makeNewString('abc123abc123'));

console.log(makeNewString('ab'));


//Excercise 2: Write a JS program to extract the first half of a 
// string of even length.




// Return Link: https://www.youtube.com/watch?v=U0Ce27lA7R4&feature=youtu.be