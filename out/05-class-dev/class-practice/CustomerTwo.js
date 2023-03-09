"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerTwo = /** @class */ (function () {
    function CustomerTwo(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(CustomerTwo.prototype, "firstName", {
        // new syntax for accessor methods
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerTwo;
}());
var myCustomer = new CustomerTwo("Squid", "Bert");
//myCustomer.firstName = "Shirley";
console.log(myCustomer.firstName);
