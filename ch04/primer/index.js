let Product = function(name, price) {
    this.name = name ;
    this.price = price ;
}

Product.prototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

let TaxedProduct = function ( name, price, taxRate ) {
    Product.call(this, name, price) ;
    this.taxRate = taxRate ;
}

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function() {
    return Number(this.price) * this.taxRate ;
}

TaxedProduct.prototype.toTaxString = function() {
    return `${this.toString()}, Tax: ${this.getPriceIncTax()}` ;
}

let hat = new TaxedProduct("Hat", 100, 1.2);
let boots = new TaxedProduct("Boots", 100, 1.2) ;

console.log(hat.toTaxString());
console.log(boots.toString());

// toString: Name: Hat, Price: 100, Tax: 120
// toString: Name: Boots, Price: 100