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
*/
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


