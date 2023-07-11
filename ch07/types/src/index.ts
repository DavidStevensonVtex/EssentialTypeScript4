function calculateTax(amount : number) {
    return (amount * 1.2).toFixed(2) ;
}

let price = 100 ;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2 ;

console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);

// src/index.ts(7,17): error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.