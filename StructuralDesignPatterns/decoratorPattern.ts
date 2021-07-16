/**
Using decorators you can wrap objects countless number of times since both target objects and decorators follow the same interface. The resulting object will get a stacking behavior of all wrappers.
Decorator pattern uses wrappers that has same interface as the concrete class so we can extend the base class with decorator without changing anything in base class.

We can use aggregation or composition for implementing the above
Aggregation: object A contains objects B; B can live without A.
Composition: object A consists of objects B; A manages life cycle of B; B can’t live without A.

Advantage of Decorator Pattern
- It provides greater flexibility than static inheritance.
- It enhances the extensibility of the object, because changes are made by coding new classes.
- It simplifies the coding by allowing you to develop a series of functionality from targeted classes instead of coding all of the behavior into the object.

Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.

Comparison: 
Adapter changes the interface of an existing object, while Decorator enhances an object without changing its interface. In addition, Decorator supports recursive composition, which isn’t possible when you use Adapter.
Adapter provides a different interface to the wrapped object, Proxy provides it with the same interface, and Decorator provides it with an enhanced interface.


 */

interface DataSource {
  readData(): string;
}

class FileDataSource implements DataSource {
  filePath?: string;
  constructor(filePath: string) {
    this.filePath = filePath;
  }
  readData() {
    return "ReadData";
  }
}

class DeCompressor implements DataSource {
  dataSource: DataSource;
  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  readData() {
    const uncompressed = this.dataSource.readData();
    return uncompressed + " DeCompressed";
  }
}

class Decrypt implements DataSource {
  dataSource: DataSource;
  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  readData() {
    const encrypted = this.dataSource.readData();
    return encrypted + " Decrypted";
  }
}

class Application {
  static getFile(filePath: string) {
    let source = new FileDataSource(filePath);
    source = new DeCompressor(source);
    source = new Decrypt(source);
    return source.readData();
  }
}
// Client
console.log(Application.getFile("random.txt"));
