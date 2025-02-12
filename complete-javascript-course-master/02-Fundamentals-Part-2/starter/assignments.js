// Functions

// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

console.log(describeCountry("United States", 35, "Washington DC"));
console.log(describeCountry("Japan", 20, "Tokyo"));
console.log(describeCountry("Russia", 15, "Moscow"));

// Function Expressions vs Function Declarations

// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.
function percentageOfWorld1(population) {
  return (population / 79000000) * 100
}
// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

const pop1 = percentageOfWorld1(1000000);
const pop2 = percentageOfWorld1(100003223);
const pop3 = percentageOfWorld1(4545343423);

// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

const percentageOfWorld2 = function (population) {
  return (population / 79000000) * 100;
}

console.log(percentageOfWorld2(5000000));
