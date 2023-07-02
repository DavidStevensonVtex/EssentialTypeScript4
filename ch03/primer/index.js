let hatPrice = 100 ;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100" ;
console.group(`Boots price: ${bootsPrice}`);

if (hatPrice === bootsPrice) {
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}

let totalPrice = Number(hatPrice) + Number(bootsPrice) ;
console.log(`Total Price: ${totalPrice}`);

// Values have types, not variables.
let myVariable = "Adam" ;
console.log(`Type: ${typeof myVariable}`);

myVariable = 100 ;
console.log(`Type: ${typeof myVariable}`);

let firstCity ;
let secondCity = firstCity || "London" ;
console.log(`City: ${secondCity}`);
// City: London

// Understanding Nullish Coalescing
// 0, null and NaN are falsy values.
// ?? onlycoerces undefined and null values, and not the other falsy values, in this example.
let taxRate ;       // no tax rate has been defined
console.log(`Tax rate: ${taxRate ?? 10}%`);
taxRate = 0;        // zero-rated for tax
console.log(`Tax rate: ${taxRate ?? 10}%`);
// Tax rate: 10%
// Tax rate: 0%

