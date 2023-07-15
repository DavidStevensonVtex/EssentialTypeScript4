type Person = {
    id:   string,
    name: string,
    city: string
} ;

class Employee {
    public id: string ;
    public name: string ;
    private dept: string ;
    public city: string ;

    constructor(id: string, name: string, dept: string, city: string)
    {
        this.id = id ;
        this.name = name ;
        this.dept = dept ;
        this.city = city ;
    }

    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);       
    }
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
console.log(`Dept value: ${salesEmployee.dept}`);

// src/index.ts(27,42): error TS2341: Property 'dept' is private and only accessible within class 'Employee'.