import { SportsProduct, SPORT } from "./product" ;
import { Cart } from "./cart" ;
import { sizeFormatter, costFormatter } from "./formatters" ;

let kayak = new SportsProduct(1, "Kayak",       275,   SPORT.Watersports ) ;
let hat   = new SportsProduct(2, "Hat",         22.10, SPORT.Running, SPORT.Watersports ) ;
let ball  = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer ) ;

let cart = new Cart("Bob") ;
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1 ) ;
cart.addProduct(hat, 2 ) ;

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", `${cart.totalPrice}`);

// D:\drs\TypeScript\EssentialTypeScript4\ch14\usingjs\dist\formatters.js:10
//     writeMessage(`The ${thing} costs $${cost.toFixed(2)}`, true);
//                                              ^

// TypeError: cost.toFixed is not a function