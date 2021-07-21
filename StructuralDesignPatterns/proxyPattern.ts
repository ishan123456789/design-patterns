/**
When you don't want to or don't have access to modify a class but we want to make changes to result it produces 
We introduce a proxy which implements same interface as the original class and make required changes in the proxy 
A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

 */
interface Calculator {
  divide(n1: number, n2: number): void;
}

class ThirdPartyCalculator implements Calculator {
  divide(n1: number, n2: number) {
    return n1 / n2;
  }
}
/**
 * The above calculator doesn't consider n2 being 0
 * So we create a proxy which allows us to return 0 in case input is not valid
 */
class ProxyCalculator implements Calculator {
  service = new ThirdPartyCalculator();
  divide(n1: number, n2: number) {
    if (!+n1 || !+n2) return 0;
    // We introduced a proxy before calling the main service similarly we can add proxy after the function call.
    return this.service.divide(n1, n2);
  }
}

(() => {
  console.assert(
    new ProxyCalculator().divide(1, 0) === 0,
    "Returns 0 when input invalid"
  );
  console.assert(
    new ProxyCalculator().divide(1, "FDS" as unknown as number) === 0,
    "Returns 0 when input invalid"
  );
  console.assert(
    Number.isNaN(
      new ThirdPartyCalculator().divide(1, "FDS" as unknown as number)
    ),
    "Returns NaN when calling original method directly"
  );
  console.log("🚀 If no logs all assertions passed");
})();
