import { City, Person, Product, Employee } from "./dataTypes" ;

let myVar: keyof Product = "name" ;
myVar = "price" ;
myVar = "someOtherName" ;

// src/index.ts(5,1): error TS2322: Type '"someOtherName"' is not assignable to type 'keyof Product'.