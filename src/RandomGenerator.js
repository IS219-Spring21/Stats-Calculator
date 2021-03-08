const randomNumber = require('RandomFunctions/randomNumber');
const randomNumberBySeed = require('RandomFunctions/randomNumberBySeed')
const randomListOfNum = require('RandomFunctions/randomListOfNum')

class RandomGenerator{
    //Generate a random number without a seed between a range of two numbers - Both Integer and Decimal
    randomInt(min, max){
        return randomNumber.randomInt(min, max);
    }
    randomFloat(min, max){
        return randomNumber.randomFloat(min, max);
    }
    /*



    Select a random item from a list
    Set a seed and randomly.select the same value from a list
    Select N number of items from a list without a seed
    Select N number of items from a list with a seed
    */
    //Generate a random number with a seed between a range of two numbers - Both Integer and Decimal
    randomInt(min, max, seed){
        randomNumberBySeed.randomInt(min, max, seed);
    }

    randomFloat(min, max, seed){
        return randomNumberBySeed.randomFloat(min, max, seed);
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