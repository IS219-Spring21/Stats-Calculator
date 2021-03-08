const random = require('random')
const seedRandom = require('seedrandom')

class randomItemFromList{
    generateRandomItem(list, seed){
        random.use(seedRandom(seed))
        return list[random.int(0,list.length-1)]
    }
}
module.exports = randomItemFromList;