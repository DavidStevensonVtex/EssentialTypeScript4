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