let hatPrice = 100 ;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100" ;
console.group(`Boots price: ${bootsPrice}`);

if (hatPrice == bootsPrice) {
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}

let totalPrice = hatPrice + bootsPrice ;
console.log(`Total Price: ${totalPrice}`);

// Values have types, not variables.
let myVariable = "Adam" ;
console.log(`Type: ${typeof myVariable}`);

myVariable = 100 ;
console.log(`Type: ${typeof myVariable}`);


// Hat price: 100
// Boots price: 100
//   Prices are the same
//   Total Price: 100100
//   Type: string
//   Type: number