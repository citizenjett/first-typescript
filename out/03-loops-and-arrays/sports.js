"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sportsOne = ["Baseball", "Football"];
/*
for (let i = 0; i < sportsOne.length; i++){
    console.log(sportsOne[i]);
}
*/
// simplified
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) { // can't forget the 'let'
    var temp = sportsOne_1[_i];
    if (temp == "Football") {
        console.log("This is my favorite sport  " + temp);
    }
    else {
        console.log(temp);
    }
}
