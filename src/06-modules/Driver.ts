
// demonstrating the concept of modules
import { Customer } from "./Customer";

let myCustomer = new Customer("Martin", "Dixon");

myCustomer.firstName = "Smokey";
console.log(myCustomer.firstName);