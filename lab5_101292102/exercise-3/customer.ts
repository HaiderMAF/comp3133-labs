class Customer {
    private firstName: string;
    private lastName: string;
//constructor (access modifiers and constructors)
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
//In class add greeter method
    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}
//create an obj of custy
let customer = new Customer("John", "Smith");
customer.greeter();