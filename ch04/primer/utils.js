// Listing 4-31

import { calculateTax } from "./tax" ;

export function printDetails(product) {
    let taxedPrice = calculateTax(product.price);
    console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);
}

export function applyDiscount(producxt, discount = 5 )
{
    product.price = product.price - 5 ;
}