var Customer = /** @class */ (function () {
    //constructor (access modifiers and constructors)
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //In class add greeter method
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
//create an obj of custy
var customer = new Customer("John", "Smith");
customer.greeter();
