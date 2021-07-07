/**
https://www.javatpoint.com/object-pool-pattern
Mostly, performance is the key issue during the software development and the object creation, which may be a costly step.

Object Pool Pattern says that " to reuse the object that are expensive to create".

Advantage of Object Pool design pattern
- It boosts the performance of the application significantly.
- It is most effective in a situation where the rate of initializing a class instance is high.
- It manages the connections and provides a way to reuse and share them.
- It can also provide the limit for the maximum number of objects that can be created.
Usage:
- When an application requires objects which are expensive to create. Eg: there is a need of opening too many connections for the database then it takes too longer to create a new one and the database server will be overloaded.
- When there are several clients who need the same resource at different times.

We'll use an example of [GamePool](https://www.devmaking.com/learn/design-patterns/object-pool-pattern/typescript/)
*/
class Vector {
    x: number = 0;
    y: number = 0;
    z: number = 0;
    clear() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
}

class GameObject {
    position: Vector;
    rotation: Vector;
    scale: Vector;
    constructor()
   {
       this.position = new Vector();
       this.rotation = new Vector();
       this.scale =    new Vector();
   }
   clear() {
    this.position.clear();
    this.rotation.clear();
    this.scale.clear();
   }
}

class GamePool {
    activeList: Array<GameObject>;
    reservedList: Array<GameObject>;
    constructor(reserve = 5) {
        this.activeList = new Array<GameObject>();
        this.reservedList = new Array<GameObject>();
        this.initialize(5);
    }
    initialize(reserve: number) {
        for(let i = 0; i < reserve; i++) {
            this.reservedList.push(new GameObject());
        }
    }

    getGameObject() {
        if(this.reservedList.length === 0) {
            console.log('creating additional Objects');
            this.reservedList.push(new GameObject());
        } else {
            console.log('Taking from reserve list');
        }
        const gameObject = this.reservedList.pop()  as GameObject;
        this.activeList.push(gameObject);
        gameObject.clear();
        return gameObject;
    }

    removeGameObject(gameObject: GameObject) {
        const index = this.activeList.indexOf(gameObject);

        if(index > -1) {
            console.log(`Removing from active list and adding to reserved from ${index}`)
            this.activeList.splice(index, 1);
            this.reservedList.push(gameObject);
        }
   }
}
// Client side
const gp = new GamePool();
gp.getGameObject();
gp.getGameObject();
gp.getGameObject();
gp.getGameObject();
const gameObj = gp.getGameObject();
gp.removeGameObject(gameObj);
gp.getGameObject();
gp.getGameObject();
