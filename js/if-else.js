"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

console.log("Random color picked is: " + color);
var favorite = 'blue'; // TODO: change this to your favorite color from the list



// TODO: Create a block of if/else statements to check for every color except indigo and violet.


// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

if (color === 'red') {
    console.log("Red is the color of blood.");
} else if(color === 'orange') {
    console.log('orange is the color of oj.');
} else if(color === 'yellow') {
    console.log('yellow is the color of rubber ducks.');
} else if(color === 'green') {
    console.log('Green is the color of grass.');
} else if(color === 'blue') {
    console.log('Blue is the color of the sky.');


// TODO: Have a final else that will catch indigo and violet.
} else if(color === 'indigo') {
    console.log('Indigo is the color of an Indigo girl.');
} else if(color === 'violet') {
    console.log('Violet is the color of violets');


// TODO: In the else, log: I do not know anything by that color.


} else {
    console.log("I do not know anything in that color.")
}


// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
 var message = (color === favorite) ? "That's my favorite color" : "I don't like that color";
console.log(message);