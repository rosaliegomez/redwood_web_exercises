'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */

(i < 100) {
    luckyNumber = Math.floor(Math.random() * 6);
    // console.log(luckyNumber);
    var luckyNumber;
    var i = 1;
    i++;

    switch (luckyNumber) {
        case 0:
            console.log('0 appeared');
            break;
        case 1:
            console.log("1 appeared");
            break;
        case 2:
            console.log("2 appeared");
            break;
        case 3:
            console.log('3 appeared');
            break;
        case 4:
            console.log("4 appeared");
            break;
        case 5:
            console.log('5 appeared');
            break;

    }

// What do I need here?

// The output should be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100