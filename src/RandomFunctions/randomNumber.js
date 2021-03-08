const random = require('random')

class randomNumber{

    static randomInt(min, max){
        //if type of min & max is not int
        return random.int(min, max);
    }

    static randomFloat(min, max){
        //if type of min & max is not float
        return random.float(min, max);
    }

}
module.exports = randomNumber