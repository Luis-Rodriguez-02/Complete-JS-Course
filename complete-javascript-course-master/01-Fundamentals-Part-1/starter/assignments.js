const prompt = require('prompt-sync')();
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

// Log the types of isIsland, population, country and language to the console.
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof population);
// console.log(typeof country);


// let, const and var

// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
const language = "English;"
// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
const country = "United States";
let population = 1000000
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



// Declare a variable numNeighbours based on a prompt input like this:
// let numNeighbours = Number(prompt("How many neighbour countries does your country have? "));
const numNeighbours = 1
// prompt('How many neighbour countries does your contry have?');
// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).
if (numNeighbours === 1) {
  console.log("Only 1 border!")
} else if (numNeighbours > 1) {
  console.log("More than 1 border")
} else {
  console.log("No borders");
}
// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

// Test the code with different values of numNeighbours, including 1 and 0.

// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

// Reflect on why we should use the === operator and type conversion in this situation.


// Comment out the previous code so the prompt doesn't get in the way.

// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.
// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
if (language === 'English' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`); 
} else {
  console.log(`${country} does not meet your criteria :(`)
}

// If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

// Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).