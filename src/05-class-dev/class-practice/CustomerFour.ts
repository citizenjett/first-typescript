// new class

class CustomerFour {

    // defines properties and assigns properties automagically
    // minimizes boilerplate.  Parameter properties shortcut.

    constructor(private _firstName: string, 
                private _lastName: string){

                }

                get firstName(): string {  
                    return this._firstName;
                }
            
                set firstName(value: string) {   
                    this._firstName = value;
                }
            
                get lastName(): string {
                    return this._lastName;
                }
                
                set lastName(value: string) {
                    this._lastName = value;
                }
               
}

let myCustomer = new CustomerFour("Martin", "Dixon");

myCustomer.firstName = "Smokey";
console.log(myCustomer.firstName);

export{};