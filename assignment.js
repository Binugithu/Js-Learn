"use strict";
let country = "India";
let continent = "Asia";
let population = 1.428;
console.log(country, continent, population);

// Data types assignment
let isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);

// const var and let
// const lang ; // this will return an error because need to reassign value here but not possible as it is const
isIsland = false;
const myDateOfBirth = 2001;
console.log(myDateOfBirth);

/*Basic Operators
If your country split in half, and each half would contain half the population, then how many people would live in each half? */
population /= 2;
//Increase the population of your country by 1 and log the result to the console.
population++;
console.log(population);
//Finland has a population of 6 million. Does your country have more people than Finland?
let firland = 6;
console.log(population > firland);
// The average population of a country is 33 million people. Does you country have less people than the average country?
console.log(population < 33);
/* Based on the variables you created, create a new variable description which contains a string with 
this format: 'Portugal is in Europe, and its 11 million people speak portuguese'. */
language = "Hindi";
let description =
  country +
  " is in " +
  continent +
  ", " +
  " and its " +
  population +
  " million people speak " +
  language +
  ".";
console.log(description);

// challenge #1
/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the 
formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher 
BMI than John. Log it to the console too */
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// strings and Template Literals
/* Recreate the description variable from the last assignment, this time using the template literal syntax.*/
let templateDescription = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
console.log(templateDescription);

//challenge #2
// Taking Decision- If else statement
/*Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".*/

/* Write your code below. Good luck! 🙂 */
// using String
// if(BMIMark>BMIJohn){
//     console.log("Mark's BMI is higher than john's !")
// }
// else {
//     console.log("John's BMI is higher than Mark's !");
// }
// using laterals
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than john's ! (${BMIJohn})`);
} else {
  console.log(`Mark's BMI (${BMIJohn}) is higher than john's ! (${BMIMark})`);
}

// Type conversion and type coercion
//Predict the result of these 5 operations without executing them:
console.log("9" - "5"); // output 4 ;
console.log("19" - "13" + "17"); // output 617
console.log("19" - "13" + 17); // output 23
console.log("123" < 57); // output false ;
console.log(5 + 6 + "4" + 9 - 4 - 2); //output 117

// Equality operators == vs ===
// Declare a variable numNeighbours based on a prompt input like this:

//  const numNeighbours= prompt('How many neighbour countries does your contry have?');
//  if(numNeighbours === g1) console.log("Only 1 border!");//If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).
//  else if(numNeighbours>1) console.log("More than 1 border");//Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.
//  else console.log("No borders")//Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

/*CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.
TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.*/
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
if (scoreDolphins > scoreKoalas) console.log("Dolphins win the trophy");
else if (scoreKoalas > scoreDolphins) console.log("Koalas win the trophy");
else console.log("Both win the trophy");

// Challenge #4
/*Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant.
 In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different,
the tip is 20%.
Your tasks:
Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed 
to use an if...else statement (if it's easier for you, you can start with an if...else statement, and 
then try to convert it to a ternary operator).
Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: The bill was 275, the tip was 41.25, and the total value 316.25.
Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂
TEST DATA: Test with different bill values: 275, 40, and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉*/
const bill = prompt("enter your bill value");
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(Number(bill) + Number(tip));

//Fuctions
/*CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline,
 which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score 
per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
Create an arrow function calcAverage to calculate the average of 3 scores. This function should have 
three parameters and return a single number (the average score).
Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the 
calcAverage function to them (you will need to call this function, and pass scores as arguments).
Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and
avgKoalas), and then logs the winner to the console, together with the victory points, according to the 
rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/
/* Write your code below. Good luck! 🙂 */
const calcAverage = (param1, param2, param3) => {
  return (param1 + param2 + param3) / 3;
};
const scoreDolphins1 = calcAverage(85, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);

const checkwinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win(${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};

checkwinner(scoreDolphins1, scoreKoalas1);

/*CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if 
the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
Write a function calcTip that takes any bill value as an input and returns the corresponding tip, 
calculated based on the rules above (you can check out the code from the first tip calculator challenge 
if you need to). Use the function type you like the most. Test the function using a bill value of 100.
And now let's use arrays! So, create an array called bills containing the test data below.
Create an array called tips containing the tip value for each bill, calculated from the function you 
created before.
BONUS: Create an array totals containing the total values, so the bill + tip.
TEST DATA: 125, 555, and 44.*/
const bills = new Array(125, 555, 44);

const calctips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const tips = [calctips(bills[0]), calctips(bills[1]), calctips(bills[2])];
console.log(bills, tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// Challenge #3
/*Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).
Your tasks:
For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.
Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.*/
const mark = {
  fullName: "Mark Miller's",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName} BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}!`
  );
} else {
  console.log(
    `${john.fullName} BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}!`
  );
}

/*CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
Create an array called bills containing all 10 test bill values.
Create empty arrays for the tips and the totals (tips and totals)
Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
*/
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];
for (let i = 0; i < bills1.length; i++) {
  tips1.push(calctips(bills1[i]));
  totals1.push(bills1[i] + calctips(bills1[i]));
}
console.log(bills1, tips1, totals1);
