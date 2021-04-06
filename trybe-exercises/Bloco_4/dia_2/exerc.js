    
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index])
}

// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let item of numbers) {
    resultado= item + resultado
   console.log(resultado)
}

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaResultado= 0

for(let indice of numbers){
 somaResultado= indice + somaResultado;
} 
  let div= somaResultado/numbers.length
  console.log(div);

 
// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaResultado= 0

for(let indice of numbers){
 somaResultado= indice + somaResultado;
} 
  let div= somaResultado/numbers.length
  console.log(div);
  
  if (div > 20){
      console.log("valor maior que 20")
  } else {
      console.log("valor menor ou igual ao 20")
  }

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNum=0
for (indice = 0; indice < numbers.length; indice += 1){
   if( numbers[indice] > maiorNum)
       maiorNum=numbers[indice]
}  
    console.log (maiorNum)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaImpares=0
for (indice = 0; indice < numbers.length; indice += 1){
   if( numbers[indice]%2 !== 0) 
       somaImpares= somaImpares+1;
   } 
   console.log(somaImpares)

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNum=0
for (index = 0; index < numbers.length; index += 1){
   if( menorNum < numbers[index])
       menorNum=numbers[index]
}  
    console.log (menorNum)


// Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

let lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

for (let index = 0; index < lista.length; index+=1) {
    console.log(lista[index])
}

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let resultado
let lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
for (let item of lista) {
    resultado= item / 2

      console.log(item + " / 2 = " + resultado)

}
