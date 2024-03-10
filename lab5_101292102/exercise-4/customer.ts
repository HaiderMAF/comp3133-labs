export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;
//constructor (access modifiers and constructors)
    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
//In class add greeter method
    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
//method to getAge()
    public getAge(){
        return this.age;
    }
}
