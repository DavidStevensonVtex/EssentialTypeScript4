class Product {
    constructor(name, price) {
        this.name = name ;
        this.price = price ;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

function* createProductIterator() {
    yield new Product ( "Hat", 100 ) ;
    yield new Product ( "Boots", 100 ) ;
    yield new Product ( "Umbrella", 23 ) ;
}

[...createProductIterator()].forEach(p => console.log(p.toString()));

// toString: Name: Hat, Price: 100
// toString: Name: Boots, Price: 100
// toString: Name: Umbrella, Price: 23