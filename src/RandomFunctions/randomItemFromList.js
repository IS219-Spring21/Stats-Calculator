const random = require('random')

class randomItemFromList{
    generateRandomItem(list){
        return list[random.int(0,list.length-1)]
    }
}
module.exports = randomItemFromList;