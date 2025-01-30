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

*/