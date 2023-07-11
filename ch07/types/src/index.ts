function calculateTax(amount : any) : any {
    return `$${(amount * 1.2).toFixed(2)}` ;
}

let price = 100 ;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2 ;

console.log(`Price: ${price}`);
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);

let newResult: any = calculateTax(200) ;
let myNumber: number = newResult ;
console.log(`Number value: ${myNumber.toFixed(2)}`);

// Price: 100
// Full amount in tax: $120.00
// Half share: NaN
// D:\drs\TypeScript\EssentialTypeScript4\ch07\types\dist\index.js:12
// console.log(`Number value: ${myNumber.toFixed(2)}`);
//                                       ^

// TypeError: myNumber.toFixed is not a function