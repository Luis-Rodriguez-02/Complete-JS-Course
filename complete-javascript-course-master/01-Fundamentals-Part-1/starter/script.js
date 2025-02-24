// Introduction and linking JS file lectures
/*
let js = "amazing";
if (js === "amazing") {
  alert("JavaScript is fun!");
}
*/

// Values and Variables Lecture
/*
console.log('Jonas') // The value is Jonas
console.log(23) // The value is 23
// We can store values into variables
let namey = 'Jonas';
var number = 23;
console.log(namey) // We can now change the value in one place, it is stored in our memory.
// camelCase -> proper variable naming convention
*/

// DATA TYPES
/*
Primitve data types are any data types that are not objects -> There are 7 primitive data types

Number: Floating point numbers -> used for decimals and integers

String: Sequence of characters -> used for text

Boolean: Logical type can only be true or false -> used for taking decisions

Undefined: Value taken by a variable that is not yet defined

Null: Also means 'empty value'

Symbol (ES2015): Value that is unique and cannot be changed

BigInt (ES2020): Larger integers than the Number type can hold

JavaScript has dynamic typing, we dont not have to manually define the data type of the value stored in a variable. The value has a type not a variable.


// boolean
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
// we can use an operator to check type
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

let year; // will be undefined
console.log(year); // value and variable types will both be undefined
let weirdBug = null;
console.log(typeof weirdBug); // returns object (bug) should be null type
*/

// let, const and var
/*
let age = 30; // Declaration and Initialization
age = 31; // Mutating a variable  -> chaning it

const birthYear = 2002 // Creates a variable that cannot be mutated. Will generate a TypeError

// We cannot declare const variables without initializing
const job; // 

var jobb = "programmer";
jobb = "teacher";

// var is very weird, come back to this later.
// let is block scoped and var is function scoped.
*/

// Basic Operators
/*
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 = 2 * 2 * 2 = 8
const firstName = "Jonas";
const lastName = "Jaffron";
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // 25 x = x + 10, reassigning x value
x *= 4;
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// 14. Operator Precedence 

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
// starts with - then x = y = 10
// =, is right to left, so y = 10 first, then x = y;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);



// 17. Strings and Template Literals

const firstName = 'Luis';
const job = 'Developer';
const birthYear = 2002;
const year = 2025;

const luis = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(luis);

const luisNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(luisNew)

// useful to insert variables and multiline strings 
// before we would concat + vars, and use \n for multiline


// 18. If / Else statements

const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years.`)
}

const birthYear = 2002;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// CODING CHALLENGE 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Print a nice output to the console,saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}
// 2. Use a template literal to include th eBMI values in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark.toPrecision(4)}) is higher than John's (${BMIJohn})! `);
} else {
  console.log(`Mark's BMI (${BMIJohn}) is higher than John's (${BMIMark})! `);
}

// 20. Type Conversion and Coercion
// Conversion is a manual change of data type, coercion is when the JavaScript interpreter changes the data type

// type conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18)
console.log(inputYear + 18);
console.log(Number('Jonas'))
console.log(typeof NaN); // not a valid number
console.log(String(23));

//type coercion -> happens when an operator is dealing with 2 values that have different types -> js converts one value to match the other to allow for the 
console.log('I am ' + 23 + 'years old') // numbers + strings converts the number to a string
console.log('23' - '10' - 3) // minus operator converts strings to numbers and not the other way around. Same thing with *, and /
*/

// 21. Truthy and Falsy values

// Falsy values are values that when converted to boolean evaluate to false
/*
0
""
undefined
null
Nan

// Any value that is not falsy is truthy and truthy values evaluate to true when converted to booleans
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jones'));
console.log(Boolean({}));
console.log(Boolean(""));

// type coercion happens through if/else or logical operators
const money = 0;
if (money) {
  console.log("Dont spend it all")
} else {
  console.log("You should get a job");
}

let height;
if (height || height === 0) {
  console.log("yay height is defined")
} else {
  console.log("height is not defined");
}


// Equality Operators == vs ===
const age = 18;
if (age === 18) console.log("You just became an adult");
// === returns a boolean value, only evaluates to true if both sides are exactly the same
// == loose equality, does type coercion, 
// '18' == 18 , is true the string is converted to number while '18' === 18 is false because the string is not converted to a number
// avoid the loose equality operator because it is prone to bugs, better to convert manually
const favorite = Number(prompt("Enter your favorite number"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool 23 is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("Why not 23");


// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
}

// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:
// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else if (scoreDolphins > scoreKoalas){
  console.log("Dolphins win the trophy");
} else {
  console.log("Koalas win the trophy");
}

// Switch statement

const day = 'saturday';

switch (day) {
  case 'monday':
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case 'tuesday':
    console.log("Prepare theory videos");
    break;
  case 'wednesday':
  case 'thursday':
    console.log("Write code examples");
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === 'monday') {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === 'tuesday') {
  console.log("Prepare theory videos");
} else if (day === 'wednesday' || day === 'thursday') {
  console.log("Write code examples");
} else if (day === 'friday') {
  console.log("Record videos");
} else if (day === 'saturday' || day === 'sunday') {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

// Conditional (Ternary) Operator

const age = 23;
const drink = age >= 18 ? "I like to drink wine" : "I like to drink water";
console.log(drink);

let drink2
if (age >= 18) {
  drink2 = 'I like to drink wine';
} else {
  drink2 = 'I like to drink water';
}

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`)


// CODING CHALLENGE #4

// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? (bill * (15 / 100)) : (bill * (20 / 100));
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);
// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

*/