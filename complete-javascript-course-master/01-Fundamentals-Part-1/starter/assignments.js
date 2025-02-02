// Values and Variables


// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.

// country = "United States";
// population = 18000000;
// continent = "North America";
// console.log(country);
// console.log(continent)

// Data Types

// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
// lisIsland = false;
let language;

// Log the types of isIsland, population, country and language to the console.
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof population);
// console.log(typeof country);


// let, const and var

// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
language = "English;"
// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
const country = "United States";
let population = 18000000
const continent = "North America";
const isIsland = false;
// Try to change one of the changed variables now, and observe what happens.
// country = "Brazil";


// Basic Operators

// If your country split in half, and each half would contain half the population, then how many people would live in each half?
population /= 2;
console.log(population)

// Increase the population of your country by 1 and log the result to the console.
population++;
console.log(population)

// Finland has a population of 6 million. Does your country have more people than Finland?
console.log(population > 6000000)


// The average population of a country is 33 million people. Does you country have less people than the average country?
console.log(population > 33000000)

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
const descriptiveString = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(descriptiveString);

// String and Template Literals

// Recreate the description variable from the last assignment, this time using the template literal syntax.
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// If / Else Statements

// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33 - population} below average`);
}

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

// Type Conversion and Coercion
// Predict the result of these 5 operations without executing them:
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // ->'617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143