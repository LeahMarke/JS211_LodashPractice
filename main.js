var _ = require("lodash");
const assert = require("assert");

const animals = ["zebra", "moose", "pig", "llama", "hamster", "wallabe"];

// _.chunk() splits the array into seperate arrays of a given length

const animalChunk = _.chunk(animals, 3);
console.log(animalChunk);

// _.reverse() reverses the array
const animalReversal = _.reverse(animals);
console.log(animalReversal);

const numbers = [212, 403, 16, 82, 10];
// _.without() returns the array exluding all given values
const numbersWithout = _.without(numbers, 82);
console.log("this one", JSON.stringify(numbersWithout));
console.log(numbers);
console.log("numbers without:", numbersWithout);

// _.shuffle() shuffles and returns a shuffled array
const shuffledNumbers = _.shuffle(numbers);
console.log("shuffled numbers:", shuffledNumbers);

// _.head() returns first element of an array
const firstAnimal = _.head(animals);
console.log("first animal:", firstAnimal);

console.log("212, 403, 16, 10" === "212, 403, 16, 10");
// Tests:

if (typeof describe === "function") {
  describe("#testing animalChunk", function () {
    it("should divide the main array into 3 smaller arrays", function () {
      assert.equal(animalChunk.length, 2);
    });
  });
  describe("#testing animalReversal", function () {
    it("should start with wallabe", function () {
      assert.equal(animalReversal[0], "wallabe");
    });
  });
  describe("#testing numbersWithout", function () {
    it("should divide the main array into 3 smaller arrays", function () {
      assert.equal(
        JSON.stringify(numbersWithout),
        JSON.stringify([212, 403, 16, 10])
      );
    });
  });
  describe("#testing shuffledNumbers", function () {
    it("should divide the main array into 3 smaller arrays", function () {
      assert.notEqual(JSON.stringify(shuffledNumbers), JSON.stringify(numbers));
    });
  });
  describe("#testing firstAnimal", function () {
    it("should divide the main array into 3 smaller arrays", function () {
      assert.equal(animalGroups.length, 2);
    });
  });
}
