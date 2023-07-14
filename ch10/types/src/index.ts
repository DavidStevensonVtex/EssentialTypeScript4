let hat = { name: "Hat", price: 100 } ;
let gloves = { name: "Gloves", price: 75 } ;
let umbrella = { name: "Umbrella" } ;

let products = [ hat, gloves, umbrella ] ;

products.forEach(prod => console.log(`${prod.name}: ${prod.price}`));

// Property 'price' does not exist on type '{ name: string; }'.