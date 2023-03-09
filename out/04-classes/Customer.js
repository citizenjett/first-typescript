"use strict";
// the basic structure
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    // making a constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//console.log(myCustomer.firstName);
//console.log(myCustomer.lastName);
// using the class..constructing an instance
var myCustomer = new Customer("Digital", "Nomad");
