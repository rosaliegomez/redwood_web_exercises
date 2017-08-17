"use strict";


// Write the JS code to prompt the user for a number between 1 and 10, then log to the console the multiplication table for that number. For instance, if the user enters is 7, the console output should look like:


//
// for (var i = 1, j = prompt(""); i <= 10; i++){
//     console.log(j, "x", i, "=", (parseFloat(j) * i));
// }

//
//
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:



 // for (var h = 1; h <= 10; h++) {
 // var random = Math.floor(Math.random()*180)+20;
 //
 //     if (random % 2 == 0) {
 //         console.log(random, ' is an even number.');
 //     } else (
 //         console.log(random, ' is an odd number.')
 //     )
 // }
//
// Use inline JavaScript to create a for loop that uses console.log to create the output shown below.

for (var i = 1; i <= 10; i++) {
    console.log((i % 10).toString().repeat(i));
}

var j, repeated;
for (i=1; i<= 10; i++) {
    repeated ="";
    for(j = 1; j <=i; j++) {
        repeated += i % 10;
    }
    console.log(repeated);
}


// Create a for loop that uses console.log to create the output shown below.

//
// for (var i=100; i > 0; i-=5) {
//  console.log(i)
// }
