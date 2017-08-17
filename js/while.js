"use strict";

// var i = 1
//
// while (i < 65536) {
//     i = i * 2
//     console.log (i);
// }

var allCones = Math.floor((Math.random() * 50) + 50);
var sale = allCones;
do {
    var cones = Math.floor(Math.random() * 5) + 1;
    if (sale - cones < 0) {
        console.log('I cannot sale that number of cones.')
    } else {
        sale = sale - cones;
        console.log(sale + " cones left");
    }

} while (sale > 0);
    console.log('yay, i sold them all.');

//     console.log('number of cones left is: ');
//
//     if (i === 10) {
//     console.log('We have reached the end of the cones.');
//     break;
//     }
// };
//
// console.log(allCones);