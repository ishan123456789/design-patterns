/**
https://www.geeksforgeeks.org/composite-design-pattern/
Composite pattern is a partitioning design pattern and describes a group of objects that is treated the same way as a single instance of the same type of object. 
It allows you to have a tree structure and ask each node in the tree structure to perform a task.
When dealing with Tree-structured data, programmers often have to discriminate between a leaf-node and a branch. This makes code more complex, and therefore, error prone. The solution is an interface that allows treating complex and primitive objects uniformly.
It has four participants: 
- Component – Component declares the interface for objects in the composition and for accessing and managing its child components. It also implements default behavior for the interface common to all classes as appropriate.
- Leaf – Leaf defines behavior for primitive objects in the composition. It represents leaf objects in the composition.
- Composite – Composite stores child components and implements child related operations in the component interface.
- Client – Client manipulates the objects in the composition through the component interface.

In an organization, It have general managers and under general managers, there can be managers and under managers there can be developers. Now you can set a tree structure and ask each node to perform common operation like getSalary().
Composite design pattern treats each node in two ways:
1) Composite – Composite means it can have other objects below it.
2) leaf – leaf means it has no objects below it.

 */
// Interface Component
interface Employee {
    logDetails(): void;
}
// Leaf
class Developer implements Employee {
    empId: string;
    name: string;
    position: string;
    constructor(empId: string, name: string,position: string ){
        this.empId = empId;
        this.name = name;
        this.position = position;
    }
    logDetails() {
        console.log({
            empId:this.empId,
            name:this.name,
            position:this.position,
        });
    }
}
// Leaf
class Manager implements Employee {
    empId: string;
    name: string;
    position: string;
    constructor(empId: string, name: string,position: string ){
        this.empId = empId;
        this.name = name;
        this.position = position;
    }
    logDetails() {
        console.log({
            empId:this.empId,
            name:this.name,
            position:this.position,
        });
    }
}

// Composite
class CompanyDirectory implements Employee {
    empList: Array<Employee> = [];
    logDetails() {
        this.empList.map(emp => {
            emp.logDetails();
        })
    }
    addEmployee(emp:Employee) {
        this.empList.push(emp);
    }
}

// Client 
(() => {
    let dev1 = new Developer("100", "Imj", "Pro Developer");
    let dev2 = new Developer("101", "Is Mj", "Developer");

    let man1 = new Manager("200", "Ishan", "SEO Manager");
    let man2 = new Manager("200", "Ishan Mahajan", "Senior Manager");

    const techDirectory = new CompanyDirectory();
    techDirectory.addEmployee(dev1);
    techDirectory.addEmployee(dev2);

    const managingDirectory = new CompanyDirectory();
    managingDirectory.addEmployee(man1);
    managingDirectory.addEmployee(man2);

    const companyDirectory = new CompanyDirectory();
    companyDirectory.addEmployee(techDirectory);
    companyDirectory.addEmployee(managingDirectory);
    companyDirectory.logDetails();
})()
        
/**
When to use Composite Design Pattern?

- Composite Pattern should be used when clients need to ignore the difference between compositions of objects and individual objects. If programmers find that they are using multiple objects in the same way, and often have nearly identical code to handle each of them, then composite is a good choice, it is less complex in this situation to treat primitives and composites as homogeneous.

When not to use Composite Design Pattern?

- Composite Design Pattern makes it harder to restrict the type of components of a composite. So it should not be used when you don’t want to represent a full or partial hierarchy of objects.
- Composite Design Pattern can make the design overly general. It makes harder to restrict the components of a composite. Sometimes you want a composite to have only certain components. With Composite, you can’t rely on the type system to enforce those constraints for you. Instead you’ll have to use run-time checks.

 */