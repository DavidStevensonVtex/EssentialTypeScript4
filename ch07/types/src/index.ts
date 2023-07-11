function calculateTax(amount) : any {
    return `$${(amount * 1.2).toFixed(2)}` ;
}

let price = 100 ;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2 ;

let personVal = calculateTax("Bob");

console.log(`Price: ${price}`);
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);
console.log(`Name: ${personVal}`);

// src/index.ts(1,23): error TS7006: Parameter 'amount' implicitly has an 'any' type.