"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// initial reviews
var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
    console.log(total);
}
var average = total / reviews.length;
console.log(average);