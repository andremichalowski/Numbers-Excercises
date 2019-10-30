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

const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf('temp'));
console.log(firstHalf('temple'));
console.log(firstHalf('temples'));


//Excercise 3: Write a JavaScript program to 
// concatenate two strings except their first character.

const concatenate = (str1, str2) => 
    str1.slice(1) + str2.slice(1);

    console.log(concatenate('abc','def'));
    console.log(concatenate('Junior','Developer'));


//Excercise 4: Given two values, 
//write a JavaScript program to find out which one is nearest to 100.

    const closeTo = (x, y) => {
        if (100 - x < 100 - y) {
            return `${x} is closer to 100 than ${y}`;
        } else {
            return `${y} is closer to 100 than ${x}`;
        }
    };

    const closestTo100 = (a,b) => (100 - a) < (100 - b) ? a : b;

    console.log(closeTo(99, 25));


//Excercise 5: Write a JavaScript program 
//to check a given string contains 2 to 4 occurences of a specified character.

const countChars = (str, char) => 
    str.split('').filter(ch => ch === char ).length;


// Return Link: https://www.youtube.com/watch?v=U0Ce27lA7R4&feature=youtu.be