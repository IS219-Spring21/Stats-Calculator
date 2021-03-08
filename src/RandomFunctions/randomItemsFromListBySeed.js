const random = require('random')
const seedRandom = require('seedrandom')

class randomItemsFromListBySeed{
    generateRandomList(list, n, seed){
        if(n > list.length){
            return "ERROR: n is greater then list length"
        }
        let outputList = []
        random.use(seedRandom(seed))
        for(let i = 0; i < n; i++){
            let randomIndex = random.int(0, list.length-1)
            outputList.push(list[randomIndex])
            list.splice(randomIndex, 1)
        }
        return outputList;
    }
}
module.exports = randomItemsFromListBySeed;