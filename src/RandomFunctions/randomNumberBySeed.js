const seedRandom = require('seedrandom')
const random = require("random");

class randomNumberBySeed{
    static randomInt(min, max, seed){
        random.use(seedRandom(seed))
        return random.int(min, max)
    }

    static randomFloat(min, max, seed){
        random.use(seedRandom(seed))
        return random.float(min, max)
    }

}
module.exports = randomNumberBySeed;