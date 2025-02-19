// Activating Strict Mode
'use strict';
const prompt = require('prompt-sync')();

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



// Reviewing Functions

const calcAge = function (birthYear) {
  return 2037 - birthYear
}
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has been retired for ${Math.abs(retirement)} years`;
  }
}

console.log(yearsUntilRetirement(1970, "Luis"))


// CODING CHALLENGE # 1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Usethefunctiontocalculatetheaverageforbothteams
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
const checkWinner = function (teamOneAverage, teamTwoAverage) {
  if (teamOneAverage >= teamTwoAverage * 2 || teamTwoAverage >= teamOneAverage * 2) {
    const winner = teamOneAverage > teamTwoAverage ? `Dolphins win ${teamOneAverage} vs ${teamTwoAverage}` : `Koalas win ${teamTwoAverage} vs ${teamOneAverage}`
    return winner
  } else {
    return "No team wins";
  }
}

console.log(checkWinner(avgKoalas, avgDolphins));

// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// 5. Ignoredrawsthistime
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27



// Arrays

const friend1 = 'Luis';
const friend2 = 'Joe';
const friend3 = 'Bob';

const friends = ["Luis", "Joe", "Bob"];
console.log(friends);

const years = new Array(1991, 2000, 2025);


console.log(friends[0], friends[1], friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// we can mutate const arrays because they are not primitve values

// cannot reassign the array though friends = new Array("joe");
const firstName = 'Jonas'
const jonas = [firstName, "Jack", 18, friends];

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const yearss = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years[0]));


// Basic Array Operations (Methods) 

const friends = ['Luis', 'Joe', 'Nicole'];

// adds to end of array, returns length of new array
const newLength = friends.push('Jay');
console.log(friends, newLength);

// adds to beginning of array, returns length of new array
friends.unshift('John');
console.log(friends);

// removes last element of array, returns removed element
const popped = friends.pop();
console.log(popped);
console.log(friends);

// removes first element of array
friends.shift();
console.log(friends);

// returns index of item, if dne returns -1
console.log(friends.indexOf("Luis"));

// returns true or false if exists -> strict equality
console.log(friends.includes('Luis'));

// Coding Challenge 2

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
const calcTip = billValue => 
  billValue >= 50 && billValue <= 300 
? billValue * 0.15 
: billValue * 0.20;

// And now let's use arrays! So, create an array called bills containing the test data below.

const bills = [125, 555, 44];

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// Introduction to Objects

// object literal syntax, we use objects to group variables, order does not matter unlike in arrays.
const jonas = {
  firstName: 'Jonas',
  lastName: 'Russel',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Luis', 'Joe', 'Fred']
};

// Dot vs Bracket Notation

// properties ordered alphabetically
console.log(jonas);


console.log(jonas.lastName);
console.log(jonas['lastName']);

// can use statements in bracket notation
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends\n");


console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn])
} else {
  console.log("Invalid property");
}

jonas.location = 'United States';
jonas['twitter'] = 'N/A';

// Challenge 
// Jonas has 3 friends and his best friend is called Micheal
const hardSentence = `${jonas['firstName']} has ${jonas.friends.length} friends, and his best friend is called ${jonas['friends'][0]} `;
console.log(hardSentence);

const jonas = {
  firstName: 'Jonas',
  lastName: 'Russel',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Luis', 'Joe', 'Fred'],
  hasDriversLicense: false,
  
  calcAge: function () {
    this.age =  2037 - this.birthYear;
    return this.age;
  },
  
  getSummary: function () {
    console.log(`${this.firstName} is a ${this.calcAge()} year old ${this.job}, and ${this.firstName} has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`);
  }
};

console.log(jonas.calcAge())
console.log(jonas.age);
jonas.getSummary();


// challenge
// Write a method getSummary , 
// Jonas is a 46 year old teacher, and he has a drivers license

// Coding Challenge 3

// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
  
  higherBMI: function (otherPerson) {
    this.calcBMI();
    otherPerson.calcBMI();
    
    return this.bmi > otherPerson.bmi 
    ? `${this.fullName}'s BMI (${this.bmi}) is higher than ${otherPerson.fullName}'s (${otherPerson.bmi})`
    : `${otherPerson.fullName}'s BMI (${otherPerson.bmi}) is higher than ${this.fullName}'s (${this.bmi})`;
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
  
  higherBMI: function (otherPerson) {
    return this.bmi > otherPerson.bmi 
    ? `${this.fullName}'s BMI (${this.bmi}) is higher than ${otherPerson.fullName}'s (${otherPerson.bmi})`
    : `${otherPerson.fullName}'s BMI (${otherPerson.bmi}) is higher than ${this.fullName}'s (${this.bmi})`;
  }
}
// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.



// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
console.log(john.calcBMI(), 'John');
console.log(mark.calcBMI(), 'Mark');

console.log(john.higherBMI(mark));

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
//


// The for loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting wieghts repetition number ${rep}`);
}
  
*/

// Looping Arrays, Breaking and Continuing

const jonasArray = [
  'Jonas',
  'Frakie',
  2037 - 1991,
  'teacher',
  ['Micheal', 'Peter', 'Steven']
];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);

  // filling types array
  // types[i] = typeof jonas[i]
  // types.push(typeof jonasArray[i])
}


const years = [1991, 2007, 1969, 2020, 'hi']
const ages = [];

for (let i = 0; i < years.length; i++) {
  if (typeof years[i] !== 'number') continue; // only numbers
  ages.push(2037 - years[i]);
}

console.log(ages)

// continue & break statements
// continue exits the current iteration and continues to next iteration, while break exits the loop completely

