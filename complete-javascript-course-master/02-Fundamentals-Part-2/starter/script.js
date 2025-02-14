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
*/

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