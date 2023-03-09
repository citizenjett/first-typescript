"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerThree = /** @class */ (function () {
    function CustomerThree(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(CustomerThree.prototype, "firstName", {
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
    Object.defineProperty(CustomerThree.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerThree;
}());
var myCustomer = new CustomerThree("Joe", "Smith");
//myCustomer.firstName = "Shirley";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
