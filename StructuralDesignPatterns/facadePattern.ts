/**
Facade pattern provides a simple interface for client to interact with.
Having a facade is handy when you need to integrate your app with a sophisticated library that has dozens of features, but you just need a tiny bit of its functionality.

A Facade class can often be transformed into a Singleton since a single facade object is sufficient in most cases.

Suppose there are multiple objects whose instance is needed for a client to work with
So we expose a facade class to client which has the complex objects.
To get the full benefit from the pattern, make all the client code communicate with the subsystem only via the facade. 

 */
interface Mobile {
  modelNo(): string;
  price(): number;
}

class OnePlus implements Mobile {
  modelNo(): string {
    return "V9";
  }
  price(): number {
    return 59000;
  }
}

class IPhone implements Mobile {
  modelNo(): string {
    return "VXL";
  }
  price(): number {
    return 159000;
  }
}

class Shopkeeper {
  private iPhone: IPhone;
  private onePlus: OnePlus;
  constructor() {
    this.iPhone = new IPhone();
    this.onePlus = new OnePlus();
  }
  iphoneSale() {
    console.log(
      `Price is ${this.iPhone.price} for modelNo ${this.iPhone.modelNo}`
    );
  }
  onePlusSale() {
    console.log(
      `Price is ${this.onePlus.price} for modelNo ${this.onePlus.modelNo}`
    );
  }
}
