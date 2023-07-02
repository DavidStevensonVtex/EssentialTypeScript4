let hat = {
    name: "Hat",
    price: 100
} ;

let boots = {
    name: "Boots",
    price: 100
} ;

let gloves = {
    productName: "Glvoes",
    price: "40"
} ;

gloves.name = gloves.productName ;
delete gloves.productName ;
gloves.price = 20 ;

let sumPrices = (...numbers) => numbers.reduce((total, val) =>
    total + (Number.isNaN(Number(val)) ? 0 : Number(val)));

let totalPrice = sumPrices(hat.price, boots.price, gloves.price) ;
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
// Total: 220 number