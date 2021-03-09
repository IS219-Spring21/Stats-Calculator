const simpleRandom = require('./Population Sampling/SimpleRandomSample');
const systematic = require('./Population Sampling/SystematicSample');

class PopulationSamplingOperations{
    static SimpleRandom(a,b){
        if (!Array.isArray(a)){
            throw new Error('a must be an Array');
        }
        else if (a.length===0){
            throw new Error('a cannot be empty'); // Theoretically, it could be. But the project spec says no.
        }
        return simpleRandom(a,b)
    }

    static Systematic(a,b){
        if (!Array.isArray(a)){
            throw new Error('a must be an Array');
        }
        else if (a.length===0){
            throw new Error('a cannot be empty'); // Theoretically, it could be. But the project spec says no.
        }
        return systematic(a,b)
    }
}

module.exports = PopulationSamplingOperations;