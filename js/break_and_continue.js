"use strict";
//
//
// while(true) {
//     var number = prompt("give me an odd number between 1 and 50.");
//     number = parseInt(number);
//     if((number >+ 1 && number <= 50) && number % 2 ==1) {
//         console.log("found the one I was looking for");
//         break;
//
//     }
// }

var number = prompt("give me an odd number between 1 and 50.");
 number = parseInt(number);

for (var i = 1; i < 50; i+=2) {
    if (number  === i) {
    console.log("We are skipping this number.");
        continue;
    }
    console.log('Here is an odd number: ', i);
}