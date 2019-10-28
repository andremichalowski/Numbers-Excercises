// 1. Write a javascript program to check two numbers 
// and return true if one of the number is 100 or if 
// the sum of the two numbers is 100. 

const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

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
    str.indexof(`New!`) === 0 ? str : `New! ${str}`;
console.log(addNew(`New! Offers`));
// === strict operator
// ? str : turnary operator



//- RETURN LINK -//
// JS-I: https://youtu.be/N65RvNkZFGE?t=659
