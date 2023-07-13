function calculateTax(amount : number ) : number {
    return amount * 1.2 ;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product { Hat, Gloves = 20, Umbrella } ;

let productValue: Product = 0;
let productName : string = Product[productValue] ;
console.log(`Value: ${productValue}, Name: ${productName}`);

[ Product.Hat, Product.Gloves, Product.Umbrella].forEach( val => {
    console.log(`Number value: ${val} Product: ${Product[val]}`);
});

// Value: 0, Name: Hat
// Number value: 0 Product: Hat      
// Number value: 20 Product: Gloves  
// Number value: 21 Product: Umbrella