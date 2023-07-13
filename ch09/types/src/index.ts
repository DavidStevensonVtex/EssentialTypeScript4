function calculateTax(amount : number ) : number {
    return amount * 1.2 ;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product { Hat, Gloves, Umbrella } ;

[ Product.Hat, Product.Gloves, Product.Umbrella].forEach( val => {
    console.log(`Number value: ${val} Product: ${Product[val]}`);
});

// Number value: 0 Product: Hat
// Number value: 1 Product: Gloves  
// Number value: 2 Product: Umbrella