/**
Builder Pattern says that "construct a complex object from simple objects using step-by-step approach"

It is mostly used when object can't be created in single step like in the de-serialization of a complex object.

Advantage of Builder Design Pattern

- It provides clear separation between the construction and representation of an object.
- It provides better control over construction process.
- It supports to change the internal representation of objects.

Unlike other creational patterns, Builder doesn’t require products to have a common interface. That makes it possible to produce different products using the same construction process.
useful when you need to create an object with lots of possible configuration options.
The Builder pattern can be recognized in a class, which has a single creation method and several methods to configure the resulting object. Builder methods often support chaining (for example, someBuilder.setValueA(1).setValueB(2).create()).

 */

interface Builder {
    addTyre(count: number): void;
    addEngine(type: string): void;
}
class Product {
    name: string= '';
    parts: string[] = [];
}
class BuildProducts implements Builder {
    private product: Product;
    constructor() {
        this.product = new Product();
    }
    addName(name: string): void {
        this.product.name = name;
    }
    addTyre(count: number) {
        for(let i = 0; i<count; i++) {
            this.product.parts.push("Tyre");
        }
    }
    addEngine(type: string) {
            this.product.parts.push(type);
    }
    getProduct() {
        return this.product;
    }
}
// We can expose Builder directly to the client or we can have a director class
class Director {

    buildCar() {
        const builder = new BuildProducts();
        builder.addName("Car");
        builder.addTyre(4);
        builder.addEngine("v8");
        return builder.getProduct();
    }

    buildBicycle() {
        const builder = new BuildProducts();
        builder.addName("Bicycle");
        builder.addTyre(2);
        return builder.getProduct();
    }
}
// Client making call
console.log(new Director().buildCar());
console.log(new Director().buildBicycle());