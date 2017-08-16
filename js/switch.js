"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

    // TODO: create a case statement that will handle every color except indigo and violet

switch (color) {
    case "red":
        console.log("Color is red");
        break;
    case "orange":
        console.log("Color is orange");
        break;
    case "yellow":
        console.log("Color is yellow");
        break;
    case "green":
        console.log("Color is green");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    default:
        console.log('Color is indigo or violet.');
}

    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

switch (color) {
    case "red":
        console.log("Red is the color of blood.");
        break;
    case "orange":
        console.log("Orange is the color of Tang.");
        break;
    case "yellow":
        console.log("Yellow is the color of sunflowers.");
        break;
    case "green":
        console.log("Green is the color of grass.");
        break;
    case "blue":
        console.log("Blue is the color of the sky.");
        break;


    // TODO: create a default case that will catch indigo and violet
    default:
        console.log("Some flowers are indigo and violet");
}
    // TODO: for the default case, log: I do not know anything by that color.

var cameronsTotal = 180;
var ryansTotal = 250
var georgesTotal = 320

var message = (cameronsTotal > 200) ? (cameronsTotal - (cameronsTotal * .1) ) : "No discount applies";
console.log(message);

var message = (ryansTotal > 200) ? (ryansTotal - (ryansTotal * .1)) : "No discount applies."
console.log(message);
var message = (georgesTotal > 200) ? (georgesTotal - (georgesTotal * .1)) : 'no discount applies'
console.log(message);


var flipACoin = Math.floor(Math.random()* 2)

if (flipACoin === 0) {
    console.log("Buy a car.");
} else if(flipACoin === 1){
    console.log("Buy a house.");
}

var flipACoin = Math.floor(Math.random()* 2)
var message1 = (flipACoin === 0) ? "Buy a car" : "Buy a house"
console.log(message1);

var luckyNumber = Math.floor(Math.random()* 6)

var total = 60

switch (luckyNumber) {
    case 0:
        console.log(total);
        break;
    case 1:
        console.log(total - (total * .1));
        break;
    case 2:
        console.log(total - (total * .25));
        break;
    case 3:
        console.log(total);
        break;
    case 4:
        console.log(total - (total * .5));
        break;
    case 5:
        console.log(total - total);
        break;
}

var confirmed = confirm("Would you like to enter number?");
console.log(confirmed);
var userInput = prompt('What is your number?');
console.log('The user entered: ' + userInput);
if (userInput % 2) {
    alert("Number is odd.");
} else if (userInput % 2 ==0) {
    alert("number is even");
}
var plus100 = (parseInt(userInput) + 100);
alert('Number plus 100 is ' + plus100);

if ((parseInt(userInput) > 0)) {
    alert("Number is positive.")
} else if ((parseInt(userInput) < 0)) {
    alert("number is negative.")
}