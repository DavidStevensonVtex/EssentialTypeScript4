type Person = {
    id:   string,
    name: string,
    city: string
} ;

class Employee {
    public readonly id: string ;
    public name: string ;
    #dept: string ;
    public city: string ;

    constructor(id: string, name: string, dept: string, city: string)
    {
        this.id = id ;
        this.name = name ;
        this.#dept = dept ;
        this.city = city ;
    }

    writeDept() {
        console.log(`${this.name} works in ${this.#dept}`);       
    }
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
salesEmployee.id = "fidel" ;

// src/index.ts(28,15): error TS2540: Cannot assign to 'id' because it is a read-only property.