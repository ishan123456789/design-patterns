/**
https://www.javatpoint.com/factory-method-design-pattern
A Factory Pattern or Factory Method Pattern says that just define an interface or abstract class for creating an object but let the subclasses decide which class to instantiate. In other words, subclasses are responsible to create the instance of the class.

The Factory Method Pattern is also known as Virtual Constructor.
Advantage of Factory Design Pattern
- Factory Method Pattern allows the sub-classes to choose the type of objects to create.
- It promotes the loose-coupling by eliminating the need to bind application-specific classes into the code. That means the code interacts solely with the resultant interface or abstract class, so that it will work with any classes that implement that interface or that extends that abstract class.
Usage of Factory Design Pattern
- When a class doesn't know what sub-classes will be required to create
- When a class wants that its sub-classes specify the objects to be created.
- When the parent classes choose the creation of objects to its sub-classes.
 */
enum PlanTypeEnum {
  BUSINESS = "BUSINESS",
  ECONOMY = "ECONOMY",
}
// Abstract parent
abstract class Plan {
  rate = 0;
  abstract getRate(): number;
  calculateBill(unit: number) {
    return unit * this.rate;
  }
}
class BusinessPlan extends Plan {
  constructor() {
    super();
    this.rate = 200;
  }
  getRate() {
    return this.rate;
  }
}
class EconomyPlan extends Plan {
  constructor() {
    super();
    this.rate = 200;
  }
  getRate() {
    return this.rate;
  }
}
// Here the conditional initialization of object happens
class GetPlanFactory {
  getPlan(planType?: PlanTypeEnum): Plan | null {
    if (!planType) return null;
    if (planType === PlanTypeEnum.BUSINESS) return new BusinessPlan();
    if (planType === PlanTypeEnum.ECONOMY) return new EconomyPlan();
    return null;
  }
}
// Calling it
const getBill = (planType: PlanTypeEnum, unit: number) => {
  const planFactory = new GetPlanFactory();
  // Initiating rate
  const plan = planFactory.getPlan(planType);
  if (!plan) {
    return console.error("plan type invalid");
  }
  console.log("rateIs", plan.getRate());
  return plan.calculateBill(unit);
};
console.log("Bill is", getBill(PlanTypeEnum.BUSINESS, 2));
console.log("Bill is", getBill(PlanTypeEnum.ECONOMY, 5));
