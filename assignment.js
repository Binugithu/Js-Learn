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


