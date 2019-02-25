/******************************
***Variables and Data Types****
*******************************/

/*

console.log('Hello World!!!!');

var firstName = 'John';
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "teacher";

console.log(job);

//Variable naming Rules
var _3years = 3;
var johnMark = "John and Mark";
var if = 23;
*/
/*******************************************
 ***Variables mutation and type coercion****
 *******************************************/

// var firtstName = "Patrick";
// var age = 34;
//
// //Type Coercion
// console.log(firtstName + ' ' + age);
//
// var lol = firtstName + ' ' + age;
//
// console.log(lol);
//
// var job, isMarried;
// job = "teacher";
// isMarried = true;
//
// console.log(firtstName + " is a " + age + " year old " +
// job + ". Is her married? " + isMarried);
//
// // Variable mutation
//
// age = "twenty eight";
//
// job = "driver";
//
// alert(firtstName + " is a " + age + " year old " +
//     job + ". Is her married? " + isMarried);
//
// var lastName = prompt("What is his last name?");
// console.log(firtstName + " " + lastName);

/**********************
 ***Basic Operators****
 **********************/

// //Math Operators
// var now, yearJohn, yearMark;
//
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
//
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
//
// console.log(yearJohn);
//
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
//
// //Logical Operators
//
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);
//
// // typeof Operator
//
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
//
// var x;
// console.log(x);

/**************************
 ***Operator Precedence****
 **************************/

// var now, yearJohn, fullAge;
//
// now = 2018;
// yearJohn = 1989;
// fullAge = 18;
//
// // Multiple Operators
// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);
//
// var ageJohn, ageMark, average;
//
// // Grouping
// ageJohn = now - yearJohn;
// ageMark = 35;
// average = (ageJohn + ageMark) / 2;
// console.log(average);
//
// // Multiple Assignments
//
// var x, y;
//
// x = (3 +5) * 4 - 6; // 26
// x = y = (3 +5) * 4 - 6; // 26
//
// console.log(x);
// console.log(x, y);
//
// // More Operators
//
// x *= 2;
// console.log(x);
// x = x * 2;
// console.log(x);
//
// x += 10;
// console.log(x);
//
// x = x + 1;
// x += 1;
// x++;


/*************************
 ***Coding Challenge 1****
 *************************/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/
var markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI, markHigherBMI;

markMass = 68;
johnMass = 90;

markHeight = 1.67;
johnHeight = 1.82;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI,johnBMI);

markHigherBMI = (markBMI > johnBMI);

console.log("Is Mark's BMI higher than John's? " + markHigherBMI);















