let myObject = {
    greeting: "Hi, there",

    writeMessage(message) {
        console.log(`${this.greeting}, ${message}`);
    }
}

greeting = "Hello" ;

myObject.writeMessage("It is sunny today") ;
myObject.writeMessage.call(myObject, "It is sunny today") ;
// Hi, there, It is sunny today
// Hi, there, It is sunny today

let myFunction = myObject.writeMessage ;
myFunction("It is sunny today");
myFunction.call(myObject, "It is sunny today");
// Hello, It is sunny today
// Hi, there, It is sunny today