function calculateTax(amount : number ) : number {
    return amount * 1.2 ;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let prices = [] ;
prices.push(...[ 100, 75, 42, "20" ] ) ;
let names = [ "Hat", "Gloves", "Umbrella", "Sunglasses" ] ;

prices.forEach((price, index) =>
    writePrice(names[index], calculateTax(price)));

// Price for Hat: $120.00
// Price for Gloves: $90.00    
// Price for Umbrella: $50.40  
// Price for Sunglasses: $24.00