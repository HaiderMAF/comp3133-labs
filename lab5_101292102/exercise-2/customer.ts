class Customer {
    firstName: string;
    lastName: string;
//In class add greeter method
    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}
//create an obj of custy

let customer = new Customer();
customer.firstName = "John";
customer.lastName = "Smith";
customer.greeter();