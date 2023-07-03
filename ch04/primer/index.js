let ProductProto = {
    toString: function() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2 ;
    }
} ;

let boots = {
    name: "Boots",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2 ;
    }
}

Object.setPrototypeOf(hat, ProductProto);
Object.setPrototypeOf(boots, ProductProto);

console.log(hat.toString());
console.log(boots.toString());

// toString: Name: Hat, Price: 100
// toString: Name: Boots, Price: 100