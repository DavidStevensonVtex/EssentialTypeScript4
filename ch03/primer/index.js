let hatPrice = 100 ;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100" ;
console.group(`Boots price: ${bootsPrice}`);

function sumPrices(first, second, third = 0)
{
    return first + second + third ;
}

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);
// Total Price: 100100undefined

totalPrice = sumPrices(100, 200, 300);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);
// Total Price: 600 number

totalPrice = sumPrices(100,200) ;
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);
// Total Price: 300 number