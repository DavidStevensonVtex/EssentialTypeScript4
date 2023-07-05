// Listing 4-27: Exporting a Named Feature in the tax.js file

export function calculateTax ( price ) {
    return Number(price) * 1.2 ;
}

export default function calcTaxAndSum(...prices) {
    return prices.reduce( (total, p) => total + calculateTax(p), 0);
}