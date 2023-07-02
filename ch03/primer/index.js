let hat = {
    name: "Hat",
    price: 100
} ;

let boots = {
    name: "Boots",
    price: 100
} ;

let additionalProperties = { ...hat, discounted: true } ;
console.log("Additional: ", additionalProperties);

let replacedProperties = { ...hat, price: 10 } ;
console.log("Replaced: ", replacedProperties);

let { price, ...someProperties } = hat ;
console.log("Selected: ", someProperties) ;

// Additional:  { name: 'Hat', price: 100, discounted: true }
// Replaced:  { name: 'Hat', price: 10 }
// Selected:  { name: 'Hat' }