var Customer = /** @class */ (function () {
    function Customer() {
    }
    //In class add greeter method
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
//create an obj of custy
var customer = new Customer();
customer.firstName = "John";
customer.lastName = "Smith";
customer.greeter();
