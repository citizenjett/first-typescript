class CustomerThree {

    private _firstName: string;
    private _lastName: string;
    

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    // new syntax for accessor methods

    get firstName(): string {  // removed the 'public'.  If no accessor given, public by default
        return this._firstName;
    }

    set firstName(value: string) {   // no return type...even void
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }
    
    set lastName(value: string) {
        this._lastName = value;
    }


}

 let myCustomer = new CustomerThree("Joe", "Smith");

//myCustomer.firstName = "Shirley";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

export{};