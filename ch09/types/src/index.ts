let restrictedValue: 1 | 2 | 3 = 1 ;
let secondValue: 1 | 10 | 100 = 1 ;

restrictedValue = secondValue ;
secondValue = 100 ;
restrictedValue = secondValue ;

// src/index.ts(6,1): error TS2322: Type '100' is not assignable to type '1 | 2 | 3'.