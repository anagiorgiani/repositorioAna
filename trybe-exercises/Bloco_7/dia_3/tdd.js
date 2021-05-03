const assert = require('assert');



const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];


const addOne = (myArray) => {

const output = [];
for (let index =0; index < myArray.length; index += 1){
    output.push(myArray[index] +1);
}
return output;
}

const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);


