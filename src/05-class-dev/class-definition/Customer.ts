class Customer {

     firstName: string;
     lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("Nomad", "Dude");

//console.log(myCustomer.firstName);

//myCustomer.firstName = "Nomad";
//myCustomer.lastName = "Dude";
export{};