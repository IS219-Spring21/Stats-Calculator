const PopOps = require('../src/Operations/Statistics/PopulationSamplingOperations');

function countListAmounts(elements){
    let result = {};
    elements.forEach(function(number){
        if(number in result){
            result[number]++;
        }
        else{
            result[number] = 1;
        }
    })
    return result;
}

function checkInBounds(elements, subset){
    let countsOne = countListAmounts(elements);
    let countsTwo = countListAmounts(subset);
    for(let key in countsTwo){
        if(countsOne[key]<countsTwo[key]){
            return false;
        }
    }
    return true;
}

test('SimpleRandomSample correct amount', () => {
    expect(PopOps.SimpleRandom([1,2,3,4], 3)).toHaveLength(3); //substitute list for random number list later
});
test('SimpleRandomSample no duplicates', () => {
    let elements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]; //substitute list for random number list later
    let sample = PopOps.SimpleRandom(elements, elements.length-1);
    expect(checkInBounds(elements,sample)).toBeTruthy();
});