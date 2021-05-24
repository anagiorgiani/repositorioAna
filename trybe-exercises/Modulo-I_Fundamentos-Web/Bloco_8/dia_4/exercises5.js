
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  const namesA = names.reduce((result, item) => {
    return result + item.toLowerCase().split('a').length-1;
  },0)
  return namesA
  }

 assert.deepStrictEqual(containsA(), 20);

                
