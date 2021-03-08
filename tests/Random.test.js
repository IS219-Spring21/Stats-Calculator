const RandomGenerator = require('../src/RandomGenerator.js')
const random = require('random')
const seedRandom = require('seedrandom')

test('Random Int', () => {
    console.log("******** Random Int Test ********");
    let testInt = new RandomGenerator()
    console.log(testInt.randomInt(0, 100))
});

test('Random Float', () => {
    console.log("******** Random Float Test ********");
    let testFloat = new RandomGenerator()
    console.log(testFloat.randomFloat(0, 100))
});

test('Random Int By Seed', () => {
    console.log("******** Random Int By Seed Test ********");
    let testFloat= new RandomGenerator()
    random.use(seedRandom(10));
    let randInt = random.int(0,100);
    console.log("Expected:",randInt,"Result:",testFloat.randomInt(0, 100, 10))
    expect(testFloat.randomInt(0, 100, 10)).toBe(randInt)

});

test('Random Float By Seed', () => {
    console.log("******** Random Float By Seed Test ********");
    let testInt = new RandomGenerator()
    random.use(seedRandom(10));
    let randomFloat = random.float(0,100);
    console.log("Expected:",randomFloat,"Result:",testInt.randomFloat(0, 100, 10))
    expect(testInt.randomFloat(0, 100, 10)).toBe(randomFloat)
});

test('Random Int List Generation', () => {
    console.log("******** Random Int List Generation Test ********");
    let resultList = new RandomGenerator();
    let testList = [ 97, 27, 19, 15, 35, 80 ]
    console.log("Expected:",testList,"Result:",resultList.randomIntList(0, 100, 5, 10))
    expect(resultList.randomIntList(0, 100, 5, 10)).toStrictEqual(testList)
});

test('Random Float List Generation', () => {
    console.log("******** Random Float List Generation Test ********");
    let resultList = new RandomGenerator();
    let testList = [ 96.93856306668683, 26.76361254995892, 19.747535435868322, 14.938668046784699, 35.32052948376002, 79.2897909066469 ]
    console.log("Expected:",testList,"Result:",resultList.randomFloatList(0, 100, 5, 10))
    expect(resultList.randomFloatList(0, 100, 5, 10)).toStrictEqual(testList)
});