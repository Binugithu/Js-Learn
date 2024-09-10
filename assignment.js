let country = "India";
let continent ="Asia";
let population = 1.428;
console.log(country,continent,population);


// Data types assignment 
let isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);

// const var and let 
// const lang ; // this will return an error because need to reassign value here but not possible as it is const 
isIsland= false ;
const myDateOfBirth = 2001;
console.log(myDateOfBirth);

/*Basic Operators
If your country split in half, and each half would contain half the population, then how many people would live in each half? */
population /=2;
//Increase the population of your country by 1 and log the result to the console.
population++;
console.log(population);
//Finland has a population of 6 million. Does your country have more people than Finland?
let firland = 6;
console.log(population>firland);
// The average population of a country is 33 million people. Does you country have less people than the average country?
console.log(population<33);
/* Based on the variables you created, create a new variable description which contains a string with 
this format: 'Portugal is in Europe, and its 11 million people speak portuguese'. */
language="Hindi";
let description= country + ' is in ' + continent +', '+ ' and its '+ population +' million people speak ' + language +'.';
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
let massMark= 78;
let heightMark = 1.69;
let massJohn= 92;
let heightJohn=1.95;
let BMIMark = massMark/(heightMark*heightMark);
let BMIJohn = massJohn/(heightJohn*heightJohn);
console.log(BMIMark,BMIJohn);
let markHigherBMI= BMIMark>BMIJohn;
console.log(markHigherBMI);


// strings and Template Literals 
/* Recreate the description variable from the last assignment, this time using the template literal syntax.*/
let templateDescription= `${country} is in ${continent}, and it's ${population} million people speak ${language}.`
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
if(BMIMark>BMIJohn){
  console.log(`Mark's BMI (${BMIMark}) is higher than john's ! (${BMIJohn})`)
 }
 else {
    console.log(`Mark's BMI (${BMIJohn}) is higher than john's ! (${BMIMark})`);
 }


 // Type conversion and type coercion 
 //Predict the result of these 5 operations without executing them:
 console.log('9' - '5'); // output 4 ;
 console.log('19' - '13' + '17'); // output 617
 console.log('19' - '13' + 17);// output 23 
 console.log('123' < 57); // output false ;
 console.log(5 + 6 + '4' + 9 - 4 - 2);//output 117

 // Equality operators == vs ===
 // Declare a variable numNeighbours based on a prompt input like this:

 const numNeighbours= prompt('How many neighbour countries does your contry have?');
 if(numNeighbours === g1) console.log("Only 1 border!");//If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).
 else if(numNeighbours>1) console.log("More than 1 border");//Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.
 else console.log("No borders")//Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).







