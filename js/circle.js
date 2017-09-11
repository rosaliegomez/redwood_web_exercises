(function () {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return Math.PI * this.radius * this.radius; // TODO: return the proper value
        },

        /*doRounding is a boolean flag tha will either round or not the area of a circle*/

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding) {
                var rounded = Math.round(this.getArea());
                console.log(rounded);
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value


            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // create a circle object
    var bigCircle = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return Math.PI * this.radius * this.radius; // TODO: return the proper value
        },
        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding) {
                var rounded = Math.round(bigCircle.getArea());
                console.log(rounded);
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + bigCircle.getArea());
        }
    };


    // log info about the circle
    console.log("Raw circle information");
    bigCircle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    bigCircle.logInfo(true);
})();
