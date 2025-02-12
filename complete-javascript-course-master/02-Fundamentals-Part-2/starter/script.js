// Activating Strict Mode
'use strict';

/*

// strict mode -> strict mode makes us write safer code
// creates visible errors and prevents us from doing certain things

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriverLicense = true;
}

if (hasDriversLicense) {
  console.log("I can drive");
}



// Functions

function logger() {
  console.log("this function is a logger");
}

logger(); // calling, running, invoking function

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice;
}

console.log(fruitProcessor(5, 0));



// Function Declaration vs Function Expression

// function declaration
const currentYear = 2025
function callAge1 (birthAge) {
  return currentYear - birthAge;
}

// function expression -> annonymous functions
const calcAge2 = function (birthAge) {
  return currentYear - birthAge;
}

const luisAge = callAge1(2002);
console.log(luisAge);

// Arrow functions

const calcAge3 = birthYear => 2037 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Bob'));

*/

// Functions calling other functions
function cutFruitPieces (fruit) {
  return fruit * 4;
}

function fruitProcessor (apples) {
  const applePieces = cutFruitPieces(apples);
  const juice = `Making apple juice with ${applePieces} apples pieces `;
  return juice;
}

console.log(fruitProcessor(5));
