function calculateTax(amount : number ) : number {
    return amount * 1.2 ;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum OtherEnum { First = 10, Two = 20 } ;
enum Product { Hat = OtherEnum.First + 1, Gloves = 20, Umbrella = Hat + Gloves } ;

let productValue: Product = 0;      // Type '0' is not assignable to type 'Product'.
let productName : string = Product[productValue] ;
console.log(`Value: ${productValue}, Name: ${productName}`);

[ Product.Hat, Product.Gloves, Product.Umbrella].forEach( val => {
    console.log(`Number value: ${val} Product: ${Product[val]}`);
});

// Value: 0, Name: undefined
// Number value: 11 Product: Hat     
// Number value: 20 Product: Gloves  
// Number value: 31 Product: Umbrella