module.exports = function SimpleRandomSample(elements, amount){
    let remainingElements = elements;
    let result = [];
    for (let i = 0; i < amount; i++){
        let chosenIndex = Math.random() * Math.floor(remainingElements.length);
        result.push(remainingElements[Math.floor(chosenIndex)])
        remainingElements.splice(chosenIndex, 1);
    }
    return result;
};