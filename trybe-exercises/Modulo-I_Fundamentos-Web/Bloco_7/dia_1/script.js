
// // 1- Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

//   1- refatoração :

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}
testingScope(true);





// // 2- Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.


function retornaNum() {

  let oddsAndEvens = [13, 3, 4, 10, 7, 2];
  for (let index = 0; index < oddsAndEvens.length; index += 1) {
    for (let index2 = 0; index2 < oddsAndEvens.length; index2 += 1) {
      if (oddsAndEvens[index] < oddsAndEvens[index2]) {
        let armazena = oddsAndEvens[index];
        oddsAndEvens[index] = oddsAndEvens[index2];
        oddsAndEvens[index2] = armazena

      }
    }
  }
  console.log(`os números ${oddsAndEvens} se encontram ordenados de forma crescente`)
}
retornaNum()



// usando sort()
function sorte() {
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  oddsAndEvens.sort((a, b) => a - b)

  console.log(`os números ${oddsAndEvens} se encontram ordenados de forma crescente`);
}

sorte()


//  Parte 2 
 
const fatorial = () => {
  let n = 4; 
  let resultado = n;
  let fator = n-1 

  for (let index = fator; index > 1; index -= 1) {
   resultado *= index

  }
  console.log(resultado)
  }
 
  fatorial()


// ternary operator
  const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5)); 

// 2- Crie uma função que receba uma frase e retorne qual a maior palavra.

const MaiorPalavra=frase => {

 let longestWord= frase.split(' ')
  let retornaPalavra = ''
for (let indice = 0; indice < longestWord.length; indice += 1) {
  for (let indice2 =0; indice2 < longestWord.length; indice2 +=1){
    if(longestWord[indice].length > longestWord[indice2].length){
      retornaPalavra = longestWord[indice]
    }  
  
}

}
return retornaPalavra;
}

console.log (MaiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"))

