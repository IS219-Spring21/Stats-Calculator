module.exports = function SystematicSample(elements, amount){
    let result = [];

    if(amount>elements.length){
        amount = elements.length;
    }
    let interval = Math.floor(elements.length/amount);

    for (let i = 0; i < amount; i = i + interval){
        result.push(elements[i]);
    }
    return result;
};