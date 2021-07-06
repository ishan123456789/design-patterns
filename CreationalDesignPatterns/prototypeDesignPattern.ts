/**
 * https://www.javatpoint.com/prototype-design-pattern
Prototype Pattern says that cloning of an existing object instead of creating new one and can also be customized as per the requirement.

This pattern should be followed, if the cost of creating a new object is expensive and resource intensive.

Advantage of Prototype Pattern
The main advantages of prototype pattern are as follows:

- It reduces the need of sub-classing.
- It hides complexities of creating objects.
- The clients can get new objects without knowing which type of object it will be.
- It lets you add or remove objects at runtime.
Usage of Prototype Pattern
- When the classes are instantiated at runtime.
- When the cost of creating an object is expensive or complicated.
- When you want to keep the number of classes in an application minimum.
- When the client application needs to be unaware of object creation and representation.

For typescript version important to note that it's on dev if we want a deep copy or shallow copy for reference types

Also in general it's important to have ClonedInterface implemented which adds a clone function
 */
interface ClonedInterface {
    clone(): ClonedInterface;
}
class User implements ClonedInterface{
    public name: string;
    public age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    clone(): this {
        return Object.assign({}, this);
    }
}
const u1 = new User("Ishan", 24);
const u2 = u1.clone();
u2.name = "Ravi";
console.log({u1, u2});

