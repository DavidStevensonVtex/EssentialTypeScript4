let restrictedValue: 1 | 2 | 3 = 3 ;
console.log(`Value: ${restrictedValue}`);   // Value: 3

// restrictedValue = 5 ;
// src/index.ts(4,1): error TS2322: Type '5' is not assignable to type '1 | 2 | 3'.