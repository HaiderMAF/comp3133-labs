"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    //constructor (access modifiers and constructors)
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //In class add greeter method
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    //method to getAge()
    Customer.prototype.getAge = function () {
        return this.age;
    };
    return Customer;
}());
exports.Customer = Customer;
