/**
https://www.javatpoint.com/singleton-design-pattern-in-java
Singleton Pattern says that just"define a class that has only one instance and provides a global point of access to it"
There are two forms of singleton design pattern

- Early Instantiation: creation of instance at load time.
- Lazy Instantiation: creation of instance when required.

Advantage of Singleton design pattern
- Saves memory because object is not created at each request. Only single instance is reused again and again.
Usage of Singleton design pattern
- Singleton pattern is mostly used in multi-threaded and database applications. It is used in logging, caching, thread pools, configuration settings etc.

To create the singleton class, we need to have static member of class, private constructor and static factory method.

- Static member: It gets memory only once because of static, itcontains the instance of the Singleton class.
- Private constructor: It will prevent to instantiate the Singleton class from outside the class.
- Static factory method: This provides the global point of access to the Singleton object and returns the instance to the caller.

*/

class CacheService {
  private static cache: CacheService;
  private constructor() {
    console.log('init');
    // We can either initialize redis here as Early Instantiation approach
  }
  static getInstance() {
    if(!CacheService.cache) {
      CacheService.cache = new CacheService();
    }
    return CacheService.cache;
  }
  set() {
    console.log('isSet');
  }
  get() {
    console.log('isGet');
  }
}

console.log(CacheService.getInstance() ===
CacheService.getInstance());
