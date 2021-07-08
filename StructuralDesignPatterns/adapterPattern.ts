/**
 * 
An Adapter Pattern says that just "converts the interface of a class into another interface that a client wants".
Advantage of Adapter Pattern
- It allows two or more previously incompatible objects to interact.
- It allows reusability of existing functionality.
Usage of Adapter pattern:
- When an object needs to utilize an existing class with an incompatible interface.
- When you want to create a reusable class that cooperates with classes which don't have compatible interfaces.
- When you want to create a reusable class that cooperates with classes which don't have compatible interfaces.

The Adapter pattern is pretty common in TypeScript code. It’s very often used in systems based on some legacy code. In such cases, Adapters make legacy code work with modern classes.
Adapter is recognizable by a constructor which takes an instance of a different abstract/interface type. When the adapter receives a call to any of its methods, it translates parameters to the appropriate format and then directs the call to one or several methods of the wrapped object.
 */

class Target {
    request() {
        return "Default Target";
    }
}
// Adaptee clss contains some useful behavior but can't be used directly without modification by the client
class Adaptee {
    specificRequest() {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class Adapter extends Target {
    constructor(private adaptee: Adaptee) {super();}
    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}


/**
 * The client code supports all classes that follow the Target interface.
 */
 function clientCode(target: Target) {
    console.log(target.request());
}

// Client code invoking
console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);