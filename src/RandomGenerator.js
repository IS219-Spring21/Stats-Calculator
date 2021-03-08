const randomNumber = require('./RandomFunctions/randomNumber.js');
const randomNumberBySeed = require('./RandomFunctions/randomNumberBySeed.js')
const randomListOfNum = require('./RandomFunctions/randomListOfNum.js')

class RandomGenerator{
    //Generate a random number without a seed between a range of two numbers - Both Integer and Decimal
    randomInt(min, max){
        let rndGen = new randomNumber();
        return rndGen.randomInt(min, max);
    }

    randomFloat(min, max){
        let rndGen = new randomNumber();
        return rndGen.randomFloat(min, max);
    }
    /*



    Select a random item from a list
    Set a seed and randomly.select the same value from a list
    Select N number of items from a list without a seed
    Select N number of items from a list with a seed
    */
    //Generate a random number with a seed between a range of two numbers - Both Integer and Decimal
    randomInt(min, max, seed){
        let rndGen = new randomNumberBySeed()
        return rndGen.randomInt(min, max, seed);
    }

    randomFloat(min, max, seed){
        let rndGen = new randomNumberBySeed()
        return rndGen.randomFloat(min, max, seed);
    }

    //Generate a list of N random numbers with a seed and between a range of numbers - Both Integer and Decimal
    randomIntList(min, max, n, seed){
        return randomListOfNum.generateIntList(min, max, n, seed);
    }

    randomFloatList(min, max, n , seed){
        return randomListOfNum.generateFloatList(min, max, n, seed);
    }
}

module.exports = RandomGenerator