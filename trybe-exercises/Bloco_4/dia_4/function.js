// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// palindromo('daniel');


function palindromo(palavra) {

  let palavraInvertida = ''
  for (indice = 0; indice < palavra.length; indice += 1) {
    palavraInvertida = palavra[indice] + palavraInvertida

  }
  if (palavraInvertida === palavra) {
    return true
  }
  else {
    return false
  }

}
console.log(palindromo('daniel'))

//  Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


let lista = [2, 10, 25, 30, 15, 17]

function retornaMaiorNum(array) {

  let contador = 0;
  let variavel = 0;


  for (let indice = 0; indice < array.length; indice += 1) {
    if (contador < array[indice]) {
      contador = array[indice]
      variavel = indice
    }

  }
  console.log(variavel)
}

retornaMaiorNum(lista)

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let lista = [2, 10, 25, 30, 15, 17]

function retornaMenorNum(array) {

  let contador = 0;
  let variavel = 0;


  for (let indice = 0; indice < array.length; indice += 1) {
    if (contador > array[indice]) {
      contador = array[indice]
      variavel = indice
    }

  }
  console.log(variavel)
}

retornaMenorNum(lista)

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let lista = ['ana', 'fernanda', 'mario', 'jose']

function retornaMaiorNome() {

  let maiorNome = '';

  for (let indice = 0; indice < lista.length; indice += 1) {
    if (maiorNome.length < lista[indice].length) {
      maiorNome = lista[indice]

    }

  }
  console.log(maiorNome)
}

retornaMaiorNome(lista)



// 5- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
function retornaNum(arrayNumber) {
  let soma = 0;
  let guardaRep = 0;
  let repeticao = 0;

  for (let index1 = 0; index1 < arrayNumber.length; index1 += 1) {
    soma = 0;
    for (let index2 = 0; index2 < arrayNumber.length; index2 += 1)
      if (arrayNumber[index1] === arrayNumber[index2]) {
        soma += 1;
      }
    if (soma > guardaRep) {
      guardaRep = soma;
      repeticao = arrayNumber[index1]
    }
    return repeticao;
  }
}

console.log(retornaNum([2, 3, 2, 5, 8, 2, 3]));


// 6-Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somaNumeros(numero) {
  let contador = 0;

  for (let indice = 1; indice <= numero; indice += 1) {
    contador = indice + contador;
  }

  return contador;
}
console.log(somaNumeros(5));

// 

// 
function verificaPalavraFim(word, ending) {

  if (word.substring(word.length - 2) === ending) {
    return true;
  }
  else {
    return false;
  }
}
console.log(verificaPalavraFim('trybe', 'be'));