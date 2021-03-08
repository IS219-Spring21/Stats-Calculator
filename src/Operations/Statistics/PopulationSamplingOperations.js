const simpleRandom = require('./Population Sampling/SimpleRandomSample');
const systematic = require('./Population Sampling/SystematicSample');
const confidenceInterval = require('./Population Sampling/ConfidenceInterval');

class PopulationSamplingOperations{
    static SimpleRandom(elements,amount){
        if (!Array.isArray(elements)){
            throw new Error('a must be an Array');
        }
        else if (elements.length===0){
            throw new Error('a cannot be empty'); // Theoretically, it could be. But the project spec says no.
        }
        return simpleRandom(elements,amount);
    }

    static Systematic(elements,interval){
        if (!Array.isArray(elements)){
            throw new Error('a must be an Array');
        }
        else if (elements.length===0){
            throw new Error('a cannot be empty'); // Theoretically, it could be. But the project spec says no.
        }
        return systematic(elements, interval);
    }

    static ConfidenceInterval(elements, confidencePercentile){
        if (!Array.isArray(elements)){
            throw new Error('a must be an Array');
        }
        else if (elements.length===0){
            throw new Error('a cannot be empty'); // Theoretically, it could be. But the project spec says no.
        }
        return confidenceInterval(elements, confidencePercentile);
    }
}

module.exports = PopulationSamplingOperations;