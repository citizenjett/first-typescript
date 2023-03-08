// the basic structure

class Customer {

    // properties  .. are public by default  
    private firstName: string;
    private lastName: string;

    // making a constructor
    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}


// using the class..constructing an instance
let myCustomer = new Customer("Digital", "Nomad");

//myCustomer.firstName = "Digital";
//myCustomer.lastName = "Nomad";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);




