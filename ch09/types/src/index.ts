function calculateTax(amount : number ) : number {
    return amount * 1.2 ;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hatPrice = 100 ;
let glovesPrice = 75 ;
let umbrellaPrice = 42 ;

let prices: number[] = [ 100, 75, 42 ] ;
let names: string[] = [ "Hat", "Gloves", "Umbrella" ] ;

prices.forEach((price: number, index: number) =>
    writePrice(names[index], calculateTax(price)));

// Price for Hat: $120.00
// Price for Gloves: $90.00  
// Price for Umbrella: $50.40