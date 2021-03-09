const Rand = require('random')
module.exports = function SimpleRandomSample(elements, amount){
    let remainingElements = elements;
    let result = [];
    if(amount>elements.length){
        amount = elements.length;
    }
    for (let i = 0; i < amount; i++){
        let chosenIndex = Rand.int(0,remainingElements.length);
        result.push(remainingElements[chosenIndex]);
        remainingElements.splice(chosenIndex, 1);
    }
    return result;
};