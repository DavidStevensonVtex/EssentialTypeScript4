let hatPrice = 100 ;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100" ;
console.group(`Boots price: ${bootsPrice}`);

function sumPrices(...numbers)
{
    return numbers.reduce((total, val) =>
        total + (Number.isNaN(Number(val)) ? 0 : Number(val))) ;
}

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);
// Total Price: 200 number

totalPrice = sumPrices(100, 200, 300);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);
// Total Price: 600 number

totalPrice = sumPrices(100,200, undefined, false, "hello") ;
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);
// Total Price: 300 number