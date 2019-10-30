// 1. Write a javascript program to check two numbers 
// and return true if one of the number is 100 or if 
// the sum of the two numbers is 100. 

const isEqualTo100 = (a,b) => 
a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(100,0));
console.log(isEqualTo100(0,100));

console.log(isEqualTo100(10,0));
console.log(isEqualTo100(0,10));

console.log(isEqualTo100(20,80));
console.log(isEqualTo100(50,50));



// 2. Write a javascript program to get the extension
// of a filename.

const getFileExtension = (str) => str.slice (str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.js'));



// 3. Write a JavaScript program to replace every 
// character in a given string with the 
// character following it in the alphabet.

// String.fromCharCode
// charCodeAt

const moveCharsForward = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt (0) +1))
    .join('');

console.log(moveCharsForward('z'));



// 4. Write a JS prgrm to get the current date.

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth();
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}

console.log(formatDate());

// 5. Write a JS program to create a new string adding "New!" in front of a given string. 
// If the given string begins with "New!" already then return the original string.

const addNew = (str) => 
    str.indexOf(`New!`) === 0 ? str : `New! ${str}`;
console.log(addNew(`New! Offers`));
// === strict operator
// ? str : turnary operator



//- RETURN LINK -//
// JS-I: https://youtu.be/N65RvNkZFGE?t=659


//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//


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

    const contains2To4 = (str, char) => 
        countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4('ooh!', 'o'));
console.log(contains2To4('oh!', 'o'));
console.log(contains2To4('oooh!', 'o'));
console.log(contains2To4('ooooh!', 'o'));
console.log(contains2To4('oooooh!', 'o'));

// Return Link: https://www.youtube.com/watch?v=U0Ce27lA7R4&feature=youtu.be

//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//

https://www.youtube.com/watch?v=U0Ce27lA7R4&feature=youtu.be


