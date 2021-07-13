/**
 It let's you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.
Suppose you have a Shape class in which you want to extend a color class
The number of combination would be like cartesian product of the above 
So suppose we have 2 Colors, 2 Shapes we would now require 4 class combinations
And if we add 1 more color and shape we would need 9 classes 

This above is due to strong coupling a change in the interface of Shape would require to change all the sub classes.
So through Bridge pattern we move from inheritance to object composition.
We extract one dimension in a separate class entity and original class refers to an object of new classes.

This is a design mechanism that encapsulates an implementation class inside of an interface class.

- The bridge pattern allows the Abstraction and the Implementation to be developed independently and the client code can access only the Abstraction part without being concerned about the Implementation part.
- The abstraction is an interface or abstract class and the implementor is also an interface or abstract class.
- The abstraction contains a reference to the implementor. Children of the abstraction are referred to as refined abstractions, and children of the implementor are concrete implementors. Since we can change the reference to the implementor in the abstraction, we are able to change the abstraction’s implementor at run-time. Changes to the implementor do not affect client code.
- It increases the loose coupling between class abstraction and it’s implementation.

The Bridge pattern is an application of the old advice, “prefer composition over inheritance”. It becomes handy when you must subclass different times in ways that are orthogonal with one another.

Advantages: 
- Bridge pattern decouple an abstraction from its implementation so that the two can vary independently.
- It is used mainly for implementing platform independence feature.
- It adds one more method level redirection to achieve the objective.
- Publish abstraction interface in a separate inheritance hierarchy, and put the implementation in its own inheritance hierarchy.
- Use bridge pattern to run-time binding of the implementation.
- Use bridge pattern to map orthogonal class hierarchies
- Bridge is designed up-front to let the abstraction and the implementation vary independently.
*/

interface Workshop {
    work():void;
}

abstract class Vehicle {
    protected workshop1: Workshop; 
    protected workshop2: Workshop;
    constructor(workshop1: Workshop, workshop2: Workshop) {
        this.workshop1 = workshop1;
        this.workshop2 = workshop2;
    }
    abstract manufacture(): void;
}

// Refine abstraction 1 in bridge pattern
class Car extends Vehicle {
    constructor( workshop1: Workshop,  workshop2: Workshop)
    {
        super(workshop1, workshop2);
    }
  
    manufacture()
    {
        console.log("Car....");
        this.workshop1.work();
        this.workshop2.work();
    }
}
  
// Refine abstraction 2 in bridge pattern
class Bike extends Vehicle {
    constructor( workshop1: Workshop,  workshop2: Workshop)
    {
        super(workshop1, workshop2);
    }
  
    manufacture()
    {
        console.log("Bike....");
        this.workshop1.work();
        this.workshop2.work();
    }
}


// Concrete implementation 1 for bridge pattern
class Produce implements Workshop {
    public work()
    {
        console.log("Produced");
    }
}
  
// Concrete implementation 2 for bridge pattern
class Assemble implements Workshop {
    
    public work()
    {
        console.log(" And");
        console.log(" Assembled.");
    }
}
  
// Demonstration of bridge design pattern
class BridgePattern {
    static ManufactureBikeAndCar()
    {
        const vehicle1 = new Car(new Produce(), new Assemble());
        vehicle1.manufacture();
        const vehicle2 = new Bike(new Produce(), new Assemble());
        vehicle2.manufacture();
    }
}
BridgePattern.ManufactureBikeAndCar();

// Without Bridge Pattern
/**
                        -> Produce bus    
        Vehicle -> Bus ->
                        -> Assemble bus
                        -> Produce Bike    
        Vehicle -> Bike ->
                        -> Assemble Bike
 */
/**
 With Bridge Pattern
                        -> Bus    
        Vehicle -> 
                        -> Bike

                        -> Assemble    
        Workshop -> 
                        -> Produce
 */