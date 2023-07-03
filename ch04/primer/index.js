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
let boots = new Product("Boots", 100) ;

console.log(hat.toTaxString());
console.log(boots.toString());
console.log(`hat instanceof TaxedProduct:   ${ hat instanceof TaxedProduct}`);
console.log(`hat instanceof Product:        ${ hat instanceof Product}`);
console.log(`boots instanceof TaxedProduct: ${ boots instanceof TaxedProduct}`);
console.log(`boots instanceof Product:      ${ boots instanceof Product}`);

// toString: Name: Hat, Price: 100, Tax: 120
// toString: Name: Boots, Price: 100
// hat instanceof TaxedProduct:   true
// hat instanceof Product:        true
// boots instanceof TaxedProduct: false
// boots instanceof Product:      true