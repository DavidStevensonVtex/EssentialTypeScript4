function calculateTax(amount : number ) : number {
    return amount * 1.2 ;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hatPrice = 100 ;
let glovesPrice = 75 ;
let umbrellaPrice = 42 ;

let prices = [ 100, 75, 42, "20" ] ;
let names = [ "Hat", "Gloves", "Umbrella", "Sunglasses" ] ;

prices.forEach((price, index) =>
    writePrice(names[index], calculateTax(price)));

// src/index.ts(17,43): error TS2345: Argument of type 'string | number' is not assignable to parameter of type 'number'.
// Type 'string' is not assignable to type 'number'.