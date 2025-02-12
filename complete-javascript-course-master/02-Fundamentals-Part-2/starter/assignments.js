// Functions

// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

console.log(describeCountry("United States", 35, "Washington DC"));
console.log(describeCountry("Japan", 20, "Tokyo"));
console.log(describeCountry("Russia", 15, "Moscow"));
