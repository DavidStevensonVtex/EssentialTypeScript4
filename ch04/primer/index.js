class Product {
    constructor(name, price) {
        this.name = name ;
        this.price = price ;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

class TaxedProduct extends Product {
    constructor(name, price, taxRate = 1.2) {
        super(name, price) ;
        this.taxRate = taxRate ;
    }

    getPriceIncTax() {
        return Number(this.price) * this.taxRate ;
    }

    toString() {
        let chainResult = super.toString();
        return `${chainResult}, Tax: ${this.getPriceIncTax()}` ;
    }
}

let hat = new TaxedProduct("Hat", 100);
let boots = new TaxedProduct("Boots", 100, 1.3);

console.log(hat.toString());
console.log(boots.toString());

// toString: Name: Hat, Price: 100, Tax: 120
// toString: Name: Boots, Price: 100, Tax: 130

// toString: Name: Hat, Price: 100
// toString: Name: Boots, Price: 100