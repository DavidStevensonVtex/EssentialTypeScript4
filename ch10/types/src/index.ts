type Employee = {
    company: string,
    dept: string
} ;

type Person = {
    id:   string,
    name: string,
    city: string
} ;

let bob      = { id: "bsmith", name: "Bob", city: "London", company: "Acme Co", dept: "Sales" } ;

let dataItems: (Person & Employee) [] = [ bob ] ;

dataItems.forEach(item => {
    console.log(`Person:   ${item.id}, ${item.name},    ${item.city}`);
    console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
});

// Person:   bsmith, Bob,    London
// Employee: bsmith, Acme Co, Sales