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

test('SystematicSample correct amount', () => {
    expect(PopOps.Systematic([1,2,3,4], 1)).toHaveLength(1); //substitute list for random number list later
    expect(PopOps.Systematic([1,2,3,4], 2)).toHaveLength(2); //substitute list for random number list later
    expect(PopOps.Systematic([1,2,3,4], 3)).toHaveLength(3); //substitute list for random number list later
    expect(PopOps.Systematic([1,2,3,4], 4)).toHaveLength(4); //substitute list for random number list later
    expect(PopOps.Systematic([1,2,3,4,5,6,7,8,9,10], 5)).toHaveLength(5); //substitute list for random number list later
    expect(PopOps.Systematic([1,2,3,4,5,6,7,8,9,10], 3)).toHaveLength(3); //substitute list for random number list later
    expect(PopOps.Systematic([1,2,3,4,5,6,7,8,9,10], 8)).toHaveLength(8); //substitute list for random number list later
});
test('SystematicSample correct numbers', () => {
    expect(PopOps.Systematic([1,2,3,4], 1)).toEqual([1]); //substitute list for random number list later
    expect(PopOps.Systematic([1,2,3,4], 2)).toEqual([1,3]); //substitute list for random number list later
    expect(PopOps.Systematic([1,2,3,4], 3)).toEqual([1,2,3]); //substitute list for random number list later
    expect(PopOps.Systematic([1,2,3,4], 4)).toEqual([1,2,3,4]); //substitute list for random number list later
    expect(PopOps.Systematic([1,2,3,4,5,6,7,8,9,10], 5)).toEqual([1,3,5,7,9]); //substitute list for random number list later
    expect(PopOps.Systematic([1,2,3,4,5,6,7,8,9,10], 3)).toEqual([1,4,7]); //substitute list for random number list later
    expect(PopOps.Systematic([1,2,3,4,5,6,7,8,9,10], 8)).toEqual([1,2,3,4,5,6,7,8]); //substitute list for random number list later
});

test('Confidence interval correctness', () => {
    let result = PopOps.ConfidenceInterval([45,55,67,48,68,79,98,87,84,82], 0.95);
    expect(result[0]).toBeCloseTo(60.88, 2);
    expect(result[1]).toBeCloseTo(81.72, 2);
});