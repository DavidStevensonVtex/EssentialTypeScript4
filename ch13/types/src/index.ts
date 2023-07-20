import { City, Person, Product, Employee } from "./dataTypes" ;

function getValue<T, K extends keyof T>(item: T, keyname: K) :T[K] {
    return item[keyname];
}

type priceType = Product["price"] ;
type allTypes = Product[keyof Product];

let p = new Product("Running Shoes", 100);
console.log(getValue<Product, "name">(p, "name"));
console.log(getValue(p, "price"));

let e = new Employee("Bob Smith", "Sales");
console.log(getValue(e, "name"));
console.log(getValue(e, "role"));

// Value: Running Shoes
// Value: 100      
// Value: Bob Smith
// Value: Sales 