"use strict";
// new class
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerFour = /** @class */ (function () {
    // defines properties and assigns properties automagically
    // minimizes boilerplate.  Parameter properties shortcut.
    function CustomerFour(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerFour.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerFour.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerFour;
}());
var myCustomer = new CustomerFour("Martin", "Dixon");
myCustomer.firstName = "Smokey";
console.log(myCustomer.firstName);
