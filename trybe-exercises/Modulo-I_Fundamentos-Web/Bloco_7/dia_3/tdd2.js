const assert = require('assert');


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

const wordLengths = () => {

const expected = [];

for ( let indice = 0; indice < words.length; indice += 1){
    wordLetters = words[indice].length
   expected.push(wordLetters)
}
return expected;
}


assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);