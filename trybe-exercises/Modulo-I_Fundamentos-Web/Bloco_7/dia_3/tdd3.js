const assert = require('assert');


const numbers = [9, 23, 10, 3, 8];
const expected = 53;


const sumAllNumbers = () => {
let contador = 0;

for (let index in numbers){
    contador += numbers[index]
}

return contador;
}


const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);