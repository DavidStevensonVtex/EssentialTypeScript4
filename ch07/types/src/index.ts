function calculateTax(amount : number, format: boolean) : string | number {
    const calcAmount = amount * 1.2 ;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount ;
}

let taxValue = calculateTax(100, false) ;

switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue}`);
        break ;
    default:
        let value: never = taxValue ;
        console.log(`Unexpected type for value: ${value}`);
}

let newResult: unknown = calculateTax(200, false);
let myNumber: number = newResult ;
console.log(`Number vlaue: ${myNumber.toFixed(2)}`);

// src/index.ts(21,5): error TS2322: Type 'unknown' is not assignable to type 'number'.