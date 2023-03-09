"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// demonstrating the concept of modules
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("Martin", "Dixon");
myCustomer.firstName = "Smokey";
console.log(myCustomer.firstName);
