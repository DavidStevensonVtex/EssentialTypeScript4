//@ts-nocheck

export function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}

/**
 * 
 * @param { string } thing - the name of the item
 * @param { number | string } cost  - the numeric value associated with the item
 */
export function costFormatter(thing, cost) {
    if (typeof cost === "number" ) {
        writeMessage(`The ${thing} costs $${cost.toFixed(2)}`, true);
    }
    else
    {
        writeMessage(`The ${thing} costs $${cost}`);
    }

}

function writeMessage(message) {
    console.log(message) ;
}