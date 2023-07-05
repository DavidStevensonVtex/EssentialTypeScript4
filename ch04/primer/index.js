class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name ;
        this.price = price ;
    }
}

let product = new Product("Hat", 100);

let productArray = [] ;
let productSet = new Set() ;

for (let i = 0 ; i < 5 ; i++ ) 
{
    productArray.push(product);
    productSet.add(product);
}

console.log(`Array length: ${productArray.length}`) ;
console.log(`Set size: ${productSet.size}`);
// Array length: 5
// Set size: 1

// Not so fast...
let hat1 = new Product("Hat", 100);
let hat2 = new Product("Hat", 100);

productSet = new Set() ;
productSet.add(product);
productSet.add(hat1) ;
productSet.add(hat2);
console.log(`Set size: ${productSet.size}`);
// Set size: 3