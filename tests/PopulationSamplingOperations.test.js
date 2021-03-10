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

test('Margin of error correctness',()=>{
    let result = PopOps.MarginError([2.39,
        2.87,
        2.55,
        3.52,
        3.16,
        3,
        2.63,
        2.36,
        2.99,
        2.2,
        2.53,
        2.45,
        2.12,
        2.59,
        2.64,
        2.99,
        2.95,
        2.83,
        2.43,
        3.01,
        3.22,
        2.61,
        2.83,
        2.09,
        2.41,
        3.08,
        2.58,
        2.21,
        1.82,
        3.11,
        2.61,
        2.17,
        3.01,
        2.76,
        2.42,
        2.86,
        2.87,
        2.86,
        2.86,
        2.14,
        2.69,
        2.53,
        2.5,
        2.98,
        3.09,
        2.98,
        3,
        2.51,
        2.44,
        2.39,
        3.26,
        2.56,
        3.08,
        3.22,
        2.53,
        3.43,
        2.98,
        2.43,
        2.69,
        2.5,
        3.36,
        3.55,
        2.78,
        2.59,
        2.81,
        2.41,
        2.96,
        3.28,
        2.78,
        2.46,
        2.07,
        2.38,
        3.03,
        2.75,
        3.18,
        2.98,
        2.66,
        2.66,
        2.87,
        2.78,
        3.28,
        2.69,
        2.55,
        1.62,
        2.54,
        2.45,
        2.61,
        2.67,
        3.37,
        2.57,
        2.59,
        3.47,
        3.21,
        2.67,
        2.81,
        2.77,
        2.85,
        2.29,
        2.75,
        2.93,
        2.32,
        3.2,
        2.47,
        2.55,
        2.76,
        2.78,
        2.45,
        2.59,
        2.64,
        2.42,
        2.73,
        1.96,
        2.93,
        2.16,
        3.2,
        2.66,
        3.12,
        2.3,
        2.52,
        3.07,
        3.1,
        2.32,
        3.3,
        2.43,
        2.77,
        3.3,
        2.77,
        2.4,
        2.44,
        2.19,
        3.27,
        2.13,
        2.07,
        2.48,
        2.07,
        3.19,
        2.38,
        3.08,
        2.83,
        2.74,
        2.31,
        2.59,
        2.56,
        2.4,
        2.37,
        2.11,
        1.97,
        3.02,
        2.29,
        2.88,
        2.37,
        3.34,
        3.12,
        2.43,
        2.96,
        2.41,
        2.3,
        1.66,
        2.98,
        2.62,
        3.63,
        2.37,
        2.46,
        3.04,
        2.65,
        1.91,
        2.58,
        2.44,
        2.54,
        2.44,
        2.68,
        2.88,
        2.89,
        2.72,
        2.79,
        2.5,
        2.13,
        2.79,
        2.72,
        3.84,
        2.74,
        2.55,
        1.97,
        2.82,
        3.05,
        3.1,
        2.84,
        2.88,
        3.17,
        2.59,
        2.59,
        2.69,
        2.91,
        2.22,
        2.28,
        2.22,
        2.35,
        3.47,
        2.87,
        2.84,
        2.66,
        2.77,
        2.9,
        2.98,
        2.36,
        3.86,
        2.35,
        3.05,
        1.93,
        2.56,
        1.99,
        2.53,
        2.66,
        3.14,
        2.96,
        3.13,
        1.75,
        2.89,
        2.03,
        3.14,
        2.26,
        2.76,
        2.79,
        2.09,
        2.55,
        2.95,
        2.46,
        2.44,
        3.13,
        2.53,
        2.81,
        2.84,
        2.38,
        2.36,
        2.79,
        2.36,
        2.31,
        2.74,
        2.27,
        2.5,
        2.82,
        3.32,
        3.34,
        3.74,
        2.35,
        2.27,
        3.13,
        3.21,
        1.75,
        2.77,
        3.17,
        3.53,
        2.48,
        2.55,
        2.72,
        2.3,
        2.27,
        2.2,
        2.06,
        2.46,
        2.82,
        2.7,
        2.58,
        2.5,
        2.19,
        3.17,
        2.6,
        3.51,
        2.41,
        2.32,
        2.8,
        2.93,
        2.57,
        2.28,
        2.17,
        3.13,
        2.38,
        2.57,
        2.58,
        2.85,
        2.98,
        2.35,
        3.15,
        1.84,
        2.92,
        2.23,
        2.15,
        2.99,
        2.14,
        2.43,
        2.44,
        3.58,
        1.99,
        2.6,
        2.87,
        2.92,
        3.22,
        2.13,
        2.28,
        3.16,
        2.2,
        2.89,
        2.02,
        1.83,
        2.9,
        2.47,
        2.85,
        2.57,
        2.78,
        2.66,
        3.69,
        2.33,
        2.99,
        3.17,
        3.05,
        2.8,
        3.08,
        2.91,
        2.19,
        3.29,
        2.9,
        3.35,
        2.33,
        3.02,
        2.16,
        2.89,
        2.51,
        2.88,
        2.99,
        2.06,
        2.75,
        2.62,
        3.89,
        3.15,
        2.76,
        2.81,
        2.74,
        2.2,
        3.04,
        2.26,
        3.13,
        2.72,
        2.21,
        2.41,
        2.53,
        2.79,
        2.25,
        3.06,
        2.38,
        2.16,
        3.43,
        2.89,
        2.69,
        2.69,
        2.77,
        2.39,
        2.57,
        2.71,
        2.9,
        2.6,
        2.75,
        2.39,
        2.88,
        2.53,
        2.82,
        2.86,
        3.08,
        1.55,
        2.74,
        3.04,
        2.16,
        3.24,
        2.58,
        2.68,
        2.23,
        2.64,
        3,
        2.79,
        2.8,
        2.95,
        3.21,
        2.28,
        2.75,
        2.89,
        2.64,
        2.66,
        2.49,
        2.4,
        3.24,
        2.46,
        2.76,
        2.25,
        2.74,
        2.32,
        2.39,
        2.47,
        2.22,
        3.05,
        3.06,
        2.74,
        2.23,
        2.57,
        2.67,
        3.6,
        3.61,
        2.64,
        3.39,
        2.76,
        3.26,
        2.7,
        2.79,
        3.26,
        2.49,
        2.52,
        2.11,
        2.75,
        2.38,
        2.72,
        2.01,
        3.23,
        2.31,
        2.53,
        3.42,
        2.94,
        2.56,
        2.7,
        3.16,
        3.15,
        3.23,
        3.16,
        2.68,
        2.6,
        2.23,
        3.12,
        3.42,
        2.59,
        2.7,
        3.03,
        2.5,
        3.2,
        2.21,
        3.33,
        2.22,
        3.2,
        2.74,
        3.07,
        2.64,
        3.43,
        1.93,
        3.13,
        2.73,
        1.95,
        2.8,
        2.81,
        2.9,
        2.93,
        1.92,
        2.76,
        2.33,
        2.36,
        2.36,
        2.57,
        1.95,
        2.61,
        2.94,
        2.19,
        2.97,
        2.43,
        2.17,
        2.18,
        2.96,
        2.94,
        2.43,
        2.49,
        3.12,
        2.95,
        2.9,
        3.06,
        2.7,
        2.63,
        3.2,
        3.14,
        2.82,
        3.08,
        2.75,
        2.3,
        3.02,
        2.54,
        2.78,
        2.18,
        3.07,
        2.43,
        2.45,
        2.91,
        3.02,
        1.64,
        2.52,
        2.71,
        2.68,
        2.33,
        2.31,
        2.21,
        3.01,
        2.51,
        2.9,
        3.22,
        3.08,
        1.76,
        2.77,
        3.03,
        3.19,
        2.9,
        2.57,
        2.56,
        3.52,
        2.77,
        2.37,
        2.23,
        2.79,
        2.42,
        3.26,
        3.78,
        2.96,
        3.21,
        2.26,
        2.2,
        2.38,
        2.07,
        2.01,
        3.22,
        2.79,
        3.08,
        2.85,
        2.26,
        3.72,
        2.6,
        3.38,
        2.19,
        2.5,
        2.25,
        3.17,
        2.83,
        2.58,
        3.21,
        2.16,
        2.97,
        1.49,
        3.08,
        2.56,
        1.99,
        3.33,
        2.69,
        2.58,
        2.31,
        2.02,
        2.19,
        2.46,
        2.72,
        2.53,
        3,
        2.85,
        2.9,
        2.71,
        2.37,
        3.12,
        3.34,
        2.7,
        3.2,
        2.95,
        2.17,
        3.2,
        2.34,
        2.71,
        2.67,
        2.51,
        2.29,
        2.11,
        1.35,
        2.92,
        2.46,
        2.65,
        2.35,
        2.3,
        2.7,
        2.67,
        2.89,
        2.46,
        2.61,
        3.53,
        2.88,
        2.38,
        1.99,
        2.96,
        3.73,
        2.53,
        2.67,
        2.48,
        2.99,
        2.84,
        2.38,
        2.99,
        2.55,
        1.77,
        2.97,
        2.54,
        2.58,
        2.84,
        2.78,
        2.63,
        2.83,
        2.76,
        2.56,
        2.86,
        2.58,
        2.48,
        2,
        1.94,
        2.45,
        2.41,
        2.68,
        2.27,
        2.78,
        3.71,
        3.11,
        2.47,
        3.93,
        2.9,
        2.77,
        2.62,
        3.07,
        2.91,
        2.8,
        2.57,
        2.51,
        1.81,
        3.19,
        2.37,
        2.86,
        2.64,
        2.51,
        3.37,
        3.32,
        2.7,
        2.08,
        2.44,
        2.65,
        2.53,
        2.87,
        2.9,
        2.74,
        3.26,
        2.39,
        3.09,
        2.46,
        2.72,
        3.27,
        2.59,
        2.6,
        2.86,
        2.82,
        2.08,
        2.34,
        3.56,
        2.95,
        2.74,
        2.28,
        2.85,
        2.38,
        2.81,
        2.17,
        3.22,
        2.71,
        2.95,
        1.69,
        2.54,
        2.86,
        2.97,
        2.92,
        2.29,
        2.58,
        2.87,
        2.88,
        3.08,
        2.91,
        2.55,
        2.78,
        2.93,
        2.79,
        2.58,
        2.46,
        3.07,
        2.9,
        2.94,
        3.19,
        3.13,
        2.15,
        2.81,
        2.73,
        3.45,
        3.07,
        2.93,
        2.72,
        2.71,
        2.41,
        2.97,
        2.75,
        3.07,
        2.74,
        3.11,
        3.08,
        2.51,
        2.41,
        2.16,
        2.57,
        2.8,
        2.17,
        3.09,
        2.84,
        2.25,
        2.01,
        3.01,
        3.03,
        2.66,
        2.66,
        2.41,
        2.48,
        2.71,
        2.56,
        3.23,
        2.46,
        2.45,
        2.51,
        2.4,
        2.5,
        2.39,
        2.64,
        2.66,
        2.27,
        2.2,
        3.33,
        2.95,
        3.02,
        2.57,
        2.11,
        2.27,
        2.46,
        3.1,
        2.06,
        3.42,
        3.08,
        2.78,
        2.62,
        1.84,
        3.26,
        2.71,
        2.46,
        2.68,
        2.5,
        2.31,
        2.33,
        2.32,
        2.65,
        2.51,
        2.87,
        2.98,
        2.95,
        2.76,
        2.91,
        3.14,
        2.32,
        2.11,
        2.87,
        3.23,
        2.59,
        2.89,
        2.94,
        3.43,
        3.35,
        2.67,
        2.96,
        3.13,
        2.03,
        2.35,
        2.93,
        2.89,
        2.42,
        3.23,
        2.67,
        2.93,
        2.87,
        2.52,
        2.87,
        2.72,
        3.09,
        2.62,
        2.33,
        3.21,
        2.82,
        2.74,
        2.75,
        2.2,
        2.94,
        2.32,
        3.29,
        2.83,
        2.57,
        2.56,
        2.06,
        2.14,
        2.62,
        2.76,
        3.02,
        2.13,
        2.84,
        2.66,
        2.02,
        2.8,
        2.7,
        2.73,
        2.64,
        2.26,
        3.16,
        3.47,
        3.2,
        2.73,
        3.1,
        2.83,
        1.97,
        2.69,
        2.33,
        2.5,
        2.58,
        2.92,
        2.81,
        2.6,
        2.91,
        2.76,
        2.45,
        2.66,
        2.6,
        2.88,
        3.08,
        3.51,
        3.12,
        3.01,
        2.01,
        2.56,
        2.56,
        2.53,
        2.28,
        3.06,
        2.89,
        2.57,
        2.63,
        3.52,
        3.09,
        2.55,
        2.56,
        2.87,
        2.61,
        2.63,
        2.3,
        2.77,
        3.22,
        2.41,
        2.89,
        2.73,
        2.56,
        3.21,
        2.39,
        2.4,
        2.19,
        1.9,
        3.12,
        2.93,
        2.81,
        2.01,
        2.79,
        2.57,
        2.11,
        2.39,
        2.55,
        2.86,
        2.96,
        3.19,
        2.58,
        2.27,
        2.91,
        2.64,
        2.74,
        3.31,
        2.53,
        3.58,
        3.05,
        2.45,
        3.08,
        2.59,
        3.13,
        2.88,
        2.42
    ], 0.90);
    expect(result).toBeCloseTo(0.021385)
});

test('Cochran correctness', () => {
    let result = PopOps.Cochran(0.05, 0.95, 0.5);
    expect(Math.ceil(result)).toBeCloseTo(385);
});

test('Sample size with CI and Width (no std dev)', () => {
    let result = PopOps.SampleSizeCI(0.95, 0.06);
    expect(Math.ceil(result)).toBeCloseTo(1068);
});

test('Sample size with CI and Width (with std dev)', () => {
    let result = PopOps.SampleSizeCI(0.99, 1, 2.9);
    expect(Math.ceil(result)).toBeCloseTo(224);
});