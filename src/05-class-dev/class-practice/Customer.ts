class Customer {

    firstName: string;
    lastName: string;

   constructor(theFirst: string, theLast: string) {
       this.firstName = theFirst;
       this.lastName = theLast;
   }

   public getFirstName(): string {
     return this.firstName;
   }

   public setFirstName(theFirst: string): void {
      this.firstName = theFirst;
   }

   public getLastName(): string {
    return this.lastName;
   }

   public setLastName(theLast: string): void {   // has a method name, param type, return type (void)
    this.lastName = theLast;
 }

}

let myCustomer = new Customer("Nomad", "Dude");

myCustomer.setFirstName("Shit");


console.log(myCustomer.getFirstName());

export{};