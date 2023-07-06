let printMessage = (msg: string) :void => 
    console.log(`Message: ${ msg }`);

let message = ("Hello, TypeScript") ;
printMessage(message);

let data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach( (val, key) => console.log(`${key} lives in ${val}`));
// src/index.ts(7,16): error TS2583: Cannot find name 'Map'. Do you need to change your target library? Try changing the `lib` compiler option to 'es2015' or later.