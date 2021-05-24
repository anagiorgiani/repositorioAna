function encode(palavra) {
    let stringNovas = '';
    stringNovas = palavra.replace(/a/g, '1');
    stringNovas = stringNovas.replace(/e/g, '2');
    stringNovas = stringNovas.replace(/i/g, '3');
    stringNovas = stringNovas.replace(/o/g, '4');
    stringNovas = stringNovas.replace(/u/g, '5');
    return stringNovas;
  }
  
  function decode(palavra) {
    let stringNumbers = '';
    stringNumbers = palavra.replace(/1/g, 'a');
    stringNumbers = stringNumbers.replace(/2/g, 'e');
    stringNumbers = stringNumbers.replace(/3/g, 'i');
    stringNumbers = stringNumbers.replace(/4/g, 'o');
    stringNumbers = stringNumbers.replace(/5/g, 'u');
    return stringNumbers;
  }

  module.exports = {encode, decode}