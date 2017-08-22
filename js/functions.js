"use strict";


 // * TODO:
 // *

 // * Create a function called 'sayHello' that takes a parameter 'name'.
 // * When called, the function should return a message that says hello to the passed in name.
 // *
 // * Example
 // *  > sayHello("codeup") // returns "Hello, codeup!"

var name = "codeup";
//
function sayHello(name) {
     return "Hello " + name;
}
console.log(sayHello(name));


 // * TODO:
 // * Call the function 'sayHello' and pass your name as a string literal argument.
alert(sayHello('rosalie'));

 // * Store the result of the function call in a variable named 'helloMessage'.

var helloMessage = sayHello('rose');


 // * console.log 'helloMessage' to check your work
console.log(helloMessage);


 // * Now store your name as a string in a variable named 'myName', and pass that
 // * variable to the 'sayHello' function. You should see the same output in the
 // * console.

var myName = "Rosaliegomez";
console.log(sayHello(myName));


//
//


// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random() * 100) + 1);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 *
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */
console.log(random);

function isOdd (number) {
    (number % 2 === 1) ? console.log("Number is odd") : console.log("Number is even.");
}
isOdd(random);
/**
 *

 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 */
var total = prompt('What is your total?');
var percentage = prompt('What percentage would you like to tip?');

function calculateTip() {
    var tip = (percentage * .01) * total;
    console.log("Since your total is " + total);
    console.log("And you want to tip " + percentage + "%");
    console.log("You should tip $" + tip);
}
calculateTip();


/**
 * TODO: use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

