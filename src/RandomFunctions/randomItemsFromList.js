const random = require('random')

class randomItemsFromList{
    generateRandomList(list, n){
        if(n > list.length){
            return "ERROR: n is greater then list length"
        }
        let outputList = []
        for(let i = 0; i < n; i++){
            let randomIndex = random.int(0, list.length-1)
            outputList.push(list[randomIndex])
            list.splice(randomIndex, 1)
        }
        return outputList;
    }

}

module.exports = randomItemsFromList;