"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var found = true; // var name, type, value syntax
var grade = 88.6;
var firstName = "Eddie";
var lastName = 'Vedder';
console.log(found);
console.log("The grade is  " + grade);
console.log("Hi " + firstName + " " + lastName);
console.log("Hi ".concat(firstName, " ").concat(lastName)); // template strings using back ticks
// arrays and loops
var reviews = [5, 5, 4.5, 1, 3];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
// math stuff
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i]; // same as total = total + reviews[i]
}
var average = total / reviews.length;
console.log("Review average = " + average);
// arrays
var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
// simplify the for loop above
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport); // the actual, current array element .. not the index
}
// conditional
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var tempSport = sportsOne_2[_a];
    if (tempSport == "Cricket") { // watch this equals .. made mistake of using just one and result is wrong
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
// growing arrays with push
var sportsTwo = ["Golf", "Cricket"];
sportsTwo.push("Moto GP");
sportsTwo.push("Football");
for (var _b = 0, sportsTwo_1 = sportsTwo; _b < sportsTwo_1.length; _b++) {
    var tempSport = sportsTwo_1[_b];
    console.log(tempSport);
}
