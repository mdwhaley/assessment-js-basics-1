///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
//Declare the totalAcres variable
let totalAcres = 0;
// create the for loop to iterate through the days of the week
// using the fujiAcres array length
for (let i = 0; i < fujiAcres.length; i++) {
  //add each orchards acres per day to the total acres variable
  totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}
//log the totalAcres should be 63
console.log(totalAcres);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
//created the averageDailyAcres variable by dividing
// the totalAcres by the fuji array length which is
// 7(days in a week) and the average ends up 63/7 = 9.
let averageDailyAcres = totalAcres / fujiAcres.length;
//log the average which ends up 9
console.log(averageDailyAcres);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE
//created a while loop that will run as long as there are acres left
while (acresLeft > 0) {
  //adds a day to the days variable as average daily acres are picked
  days += 1;
  //subtracts the days harvest from acresLeft
  acresLeft -= averageDailyAcres;
}
//log the number of days it took to pick 174 acres
console.log(days);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
// Create a tonsPerAcre variable in case it ever changes
let tonsPerAcre = 6.5;
// create the three arrays empty
let fujiTons = [];
let galaTons = [];
let pinkTons = [];
// loop the fujiAcres array and multiply each day acres
// by tonsPerAcre and push that value to the fujiTons array
for (let i = 0; i < fujiAcres.length; i++) {
  fujiTons.push(fujiAcres[i] * tonsPerAcre);
}
// loop the galaAcres array and multiply each day acres
// by tonsPerAcre and push that value to the galaTons array
for (let i = 0; i < galaAcres.length; i++) {
  galaTons.push(galaAcres[i] * tonsPerAcre);
}
// loop the pinkAcres array and multiply each day acres
// by tonsPerAcre and push that value to the pinkTons array
for (let i = 0; i < pinkAcres.length; i++) {
  pinkTons.push(pinkAcres[i] * tonsPerAcre);
}

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE
// declare the variables for the varieties
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;
// created a poundsPerTon constant because pounds per ton
// should never change, however, what if we wanted to calculate
// by metric ton later and had 100 varieties? We could change
// this constant in the code here once
const poundsPerTon = 2000;
// iterate through the fujiTons loop adding each
// value to sum up total tons and then multiplying
// by poundsPerTon to get the pounds value.
for (let i = 0; i < fujiTons.length; i++) {
  fujiPounds += fujiTons[i] * poundsPerTon;
}
// log the pounds
console.log(fujiPounds);

// iterate through the galaTons loop adding each
// value to sum up total tons and then multiplying
// by poundsPerTon to get the pounds value.
for (let i = 0; i < galaTons.length; i++) {
  galaPounds += galaTons[i] * poundsPerTon;
}
// log the pounds
console.log(galaPounds);

// iterate through the pinkTons loop adding each
// value to sum up total tons and then multiplying
// by poundsPerTon to get the pounds value.
for (let i = 0; i < pinkTons.length; i++) {
  pinkPounds += pinkTons[i] * poundsPerTon;
}
// log the pounds
console.log(pinkPounds);

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
// creating the profit variables by multiplying
// the respective pounds variables by the price
let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;
// log the profit variables
console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
// create the totalProfit variable by adding all profit
let totalProfit = fujiProfit + galaProfit + pinkProfit;
// log the totalProfit
console.log(totalProfit);

// Convert to dollars
// CODE HERE
// create a conversion from pennies to dollars and make it
// more readable
const penniesPerDollar = 100;
// log all penny values to dollar
console.log(`Profit for Fuji: $${fujiProfit / penniesPerDollar}`);
console.log(`Profit for Gala: $${galaProfit / penniesPerDollar}`);
console.log(`Profit for Pink: $${pinkProfit / penniesPerDollar}`);
console.log(`Total profit: $${totalProfit / penniesPerDollar}`);
