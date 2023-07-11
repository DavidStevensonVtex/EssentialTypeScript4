function calculateTax(amount : number, format: boolean) : string | number {
    const calcAmount = amount * 1.2 ;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount ;
}

let taxAmount = calculateTax(100, false);
let taxString = calculateTax(100, true);