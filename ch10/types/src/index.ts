enum Feature { Waterproof, Insulated } ;

type Product = {
    name: string,
    price?: number,
    hasFeature?(Feature): boolean
} ;

let hat = { name: "Hat", price: 100 } ;
let gloves = { name: "Gloves", price: 75 } ;
let umbrella = { name: "Umbrella", price: 30, 
    hasFeature: (feature) => feature === Feature.Waterproof } ;

let mirrorShades = { name: "Sunglasses", price: 54, finish: "mirrored" } ;
let darkShades : Product = { name: "Sunglasses", price: 54, finish: "flat" } ;

let products: Product [] = [ hat, gloves, umbrella, mirrorShades, darkShades ] ;

products.forEach(prod => console.log(`${prod.name}: ${prod.price} Waterproof: ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"}`));

// src/index.ts(15,61): error TS2322: Type '{ name: string; price: number; finish: string; }' is not assignable to type 'Product'.
//   Object literal may only specify known properties, and 'finish' does not exist in type 'Product'.