(function(){
    "use strict";

    /**
     */ TODO:
    var person = new Object();
     console.log(typeof person);

     /* Create person object, store it in a variable named person
     */

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */
    person.firstName = "Rosalie";
    person.lastName = "Gomez";
    console.log(person);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work

     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    };
    person.sayHello();
    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    function buildReceipt(){
        if(shoppers[1].amount > 200){
            var discount = .1;
            console.log(shoppers[1].name, "has to pay", shoppers[1].amount - (shoppers[1].amount * discount))
        } else{
            console.log("No discount applies.")
        }

    }


//     for (var i = 0; i < shoppers.length; i++) {
//         var shopper = shoppers[i];
//         console.log(buildReceipt(shopper));
//     }
//
//     shoppers.forEach(function (shopper){
//         console.log(buildReceipt(shopper));
//
//     });
//     function buildReceipt(shopper) {
//         var discount = 0;
//         var total = shopper.amount;
//
//     if (shopper.amount > 200){
//             discount = .1);
//             total = shopper.amount - shopper.amount * discount;
//         }
//         return shopper.name + " has to pay $" + shopper.amount
//             + ", it has a discount of $"
//             + ", the total to pay after the discount is $"
//             + total;
// }
buildReceipt();

})();
