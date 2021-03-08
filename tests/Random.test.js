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
    let testInt = new RandomGenerator()
    console.log(testInt.randomFloat(0, 100))
});

test('Random Int By Seed', () => {
    console.log("******** Random Int By Seed Test ********");
    let testInt = new RandomGenerator()
    random.use(seedRandom(10));
    let randInt = random.int(0,100);
    console.log("Expected:",randInt,"Result:",testInt.randomInt(0, 100, 10))
    expect(testInt.randomInt(0, 100, 10)).toBe(randInt)

});

test('Random Float By Seed', () => {
    console.log("******** Random Float By Seed Test ********");
    let testInt = new RandomGenerator()
    random.use(seedRandom(10));
    let randomFloat = random.float(0,100);
    console.log("Expected:",randomFloat,"Result:",testInt.randomFloat(0, 100, 10))
    expect(testInt.randomFloat(0, 100, 10)).toBe(randomFloat)
});