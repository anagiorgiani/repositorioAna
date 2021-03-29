// 1 Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let numAsteriscos = 5;
let linha = "";

for ( let indice = 0; indice < numAsteriscos; indice +=1) {
      linha= linha + "*"

}

for ( let indice = 0; indice < numAsteriscos; indice +=1) {
    console.log(linha)
}

// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
 let linhas =5;
 let asteriscos = "";


 for (let indice = 0; indice < linhas; indice +=1) {
    asteriscos= asteriscos + "*"
    console.log(asteriscos);
   
 }

//  3- Agora inverta o lado do triângulo.

let linha = 5
let espacoBranco= "";
let asteriscos = "";

for ( let indice = 0; indice < linha; indice +=1) {
    asteriscos = asteriscos + "*"
    espacoBranco="";

    for ( let index =0; index <  linha- asteriscos.length; index +=1) {
        espacoBranco= espacoBranco + " ";
        
    }

    console.log( espacoBranco + asteriscos)
}


 




    