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
  return (population / 79) * 100
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

const percentageOfWorld3 = population => (population / 79000000) * 100;

const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)} percent of the world`;
};

console.log(describePopulation("United States", 33000000));

// Introduction to Arrays

// Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.
const populations = [35, 45, 55, 75]

// Log to the console whether the array has 4 elements or not (true or false).

console.log(populations.length === 4);

// Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

// Basic Array Operations (Methods)


// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours. 
const neighbors = ['Mexico', 'Canada'];

// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.
neighbors.push('Utopia');

// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.
neighbors.pop();

// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.
console.log(neighbors);
console.log(neighbors.includes('Germany') ? true : 'Probably not a central european country :D');
 

// Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
const indexOfCountry = neighbors.indexOf('Canada');
neighbors[indexOfCountry] = "Nepal";

// Introduction to Objects

// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).

const myCountry = {
  country: 'United States',
  capital: 'Washington DC',
  langauge: 'English',
  population: 13,
  neighbors: ['Mexico', 'Candada'],

  describe: function() {
    console.log(`${this.country} has a capital of ${this.capital} and the language that is primarily spoken there is ${this.langauge}, one of the neighboring countries ${this.neighbors.includes('Mexico') ?  'is' : 'is not'} Mexico`);
  },

  checkIsland: function () {
    this.isIsland = myCountry.neighbors < 0 ? true : false; 
  }
};

// Dot vs Bracket Notation 
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.langauge} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

// Object Methods 

// Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

//did above

// Call the describe method.
myCountry.describe();

// Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

// the for loop

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting.`);
}

// looping arrays, breaking and continuing

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

// Looping backwards and loops in loops

// Store this array of arrays into a variable called listOfNeighbours:
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.

// You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

for (let i = 0; i < listOfNeighbours.length; i++) {
  console.log(`Group of neighbors ${i+1}`)
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(` Neighbor: ${listOfNeighbours[i][j]}`);
  }
  console.log('\n');
}

// The While Loop

// Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).
const percentages3 = [];

let len = 0;

while (len < populations.length) {
  percentages3.push(percentageOfWorld1(populations[len]));
  len++;
}

console.log(percentages3);

// Reflect on what solution you like better for this task: the for loop or the while loop?