function calculateTax(amount) {
    return amount * 1.2 ;
}

console.log(`${12} = ${calculateTax(12)}`);
console.log(`${"Hello"} = ${calculateTax("Hello")}`);
console.log(`${true} = ${calculateTax(true)}`);

// 12 = 14.399999999999999
// Hello = NaN
// true = 1.2