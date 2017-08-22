(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    //
    var planetsString = planetsArray.join('<br>');
    console.log(planetsString);

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    var ul = [
        '<ul>',
        "<li>", "Mercury", "</li>",
        "<li>", "Venus", "</li>",
        "<li>", "Earth", "</li>",
        "<li>", "Mars", "</li>",
        "<li>", "Jupiter", "</li>",
        "<li>", "Saturn", "</li>",
        "<li>", "Uranus", "</li>",
        "<li>", "Neptune", "</li>",
        '</ul>'

    ]
    console.log(ul);

    var listHTML = "<ul><li>";
    listHTML += planetsArray.join("</li><li>");
    listHTML += "</li></ul>";
    console.log(listHTML);
    document.body.innerHTML = listHTML;

    // Write a function that accepts an array whose elements are arrays where each inner array consists of two numbers. The function should return the index of the element whose two inner numbers add up to 9, or -1 if no pairs add up to 9.

    findIndexWhereSumIs9([[1, 2], [3, 4], [4, 5], [9, 1]]) // returns 2
    var sum =
    findIndexWhereSumIs9([[10, 2], [11, -2], [2, 5], [9, 1]]) // returns 1
    findIndexWhereSumIs9([[10, 2], [11, -7], [2, 5], [9, 1]]) // returns -1
})();
