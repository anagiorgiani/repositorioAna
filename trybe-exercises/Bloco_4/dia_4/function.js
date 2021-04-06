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
console.log(palindromo('ana'))

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
let nome = 'AMOR' 
let final = nome.substring(nome.length-2, nome.length)

console.log(final)


// 
function verificaPalavraFim (nome.length-2, nome.length)

if ()