let restrictedValue: 1 | 2 | 3 = 100 ;
console.log(`Value: ${restrictedValue}`);   // Value: 3

// src/index.ts(1,5): error TS2322: Type '100' is not assignable to type '1 | 2 | 3'.