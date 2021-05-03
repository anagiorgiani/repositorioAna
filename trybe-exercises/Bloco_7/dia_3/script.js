
const assert = require('assert');

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}
const expected = sum(4, 5);
const expected1 = sum(0, 0);
const expected2 = sum(4, '5');

assert.strictEqual(expected, 9, 'quatro mais cinco e igual a 9')
assert.strictEqual(expected1, 0, 'zero mais zeroé igual a zero')
assert.strictEqual(expected2, 9, 'atenção parametros devem ser tipo number')





const assert = require('assert');

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

const result = myRemove([1, 2, 3, 4], 3)
const result1 = myRemove([1, 2, 3, 4], 5)

assert.deepStrictEqual(result, [1, 2, 4])
assert.notDeepStrictEqual(result, [1, 2, 3, 4])

assert.deepStrictEqual(result1, [1, 2, 3, 4])




const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
    for (let index = 0, len = arr.length; index < len; index += 1) {
        if (arr[index] === item) {
            arr.splice(index, 1);
            index -= 1;
            len -= 1;
        }
    }

    return arr;
}

const resultado = myRemoveWithoutCopy([1, 2, 3, 4], 3)
const resultado1 = myRemoveWithoutCopy([1, 2, 3, 4], 5)

assert.deepStrictEqual(resultado, [1, 2, 4])
assert.notDeepStrictEqual(resultado, [1, 2, 3, 4])

assert.deepStrictEqual(resultado1, [1, 2, 3, 4])



const assert = require('assert');

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

const res = myFizzBuzz(15);
const res1= myFizzBuzz(9);
const res2= myFizzBuzz(10);
const res3 =myFizzBuzz(20);
const numer = myFizzBuzz('ola')



 assert.strictEqual(res,'fizzbuzz')
 assert.strictEqual(res1,'fizz')
 assert.strictEqual(res2,'buzz')
 assert.strictEqual(res3, 'número não divisel por 3 nem 5')
 assert.strictEqual(numer, false )
 

 const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2);
assert.deepStrictEqual(obj1, obj3);

assert.notDeepStrictEqual(obj1,obj3);





