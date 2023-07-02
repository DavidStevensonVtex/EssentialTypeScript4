let names = [ "Hat", "Boots", "Gloves" ];

let [, , three] = names ;
console.log(`Three: ${three}`);
// Three: Gloves

let prices = [ 100, 120, 50.25 ] ;
let [, ...highest] = prices.sort((a, b) => a - b);
highest.forEach(price => console.log(`High price: ${price}`));
// High price: 100
// High price: 120