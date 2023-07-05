import calcTax from "./tax" ;

class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name ;
        this.price = price ;
    }
}

let product = new Product("Hat", 100);
let taxedPrice = calcTax(product.price);
console.log(`Name: ${ product.name }, Taxed Price: ${taxedPrice}`);
// Name: Hat, Taxed Price: 120