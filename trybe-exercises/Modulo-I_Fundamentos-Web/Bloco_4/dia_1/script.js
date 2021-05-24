// 1- Faça cinco programas, um para cada operação aritmética básica. 
//
let a= 10;
let b= 20;

let resultadoAdicao = a + b;
console.log(resultadoAdicao);

let resultadoSub = a - b
console.log(resultadoSub);

let resultadoDiv = a / b;
console.log(resultadoDiv);

let resultadomulti = a * b;
console.log(resultadomulti);

let resultadomod = a % b;
console.log(resultadomod);

// 2- Faça um programa que retorne o maior de dois números

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}

// 3 -Faça um programa que retorne o maior de três números.

let numA = 5;
let numB = 30;
let numC = 20;

if (numA>numB) {
    console.log(numA)
} else if (numB>numC) {
    console.log(numB) 
} else {
    console.log(numC)
}


// 4-Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let num = -5;

if (num > 0) {
    console.log("Número,Positivo");
} else if ( num < 0) {
    console.log("Número,Negativo");
} else { 
    console.log("Zero")
}

// 5-Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let ladoA = 60;
let ladoB = 60;
let ladoBase= 60;

if (ladoA < 0 || ladoB < 0 || ladoBase < 0) {
    console.log("error")
} else if (ladoA + ladoB + ladoBase === 180) {
    console.log(true)
} else {
    console.log(false)
}

// 6 -Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = "Cavalo"
switch (peca.toLowerCase()) {

    case "rainha":
        console.log("qualquer direção");
    break; 

    case "cavalo":
        console.log ("movimento em L");
        break;

    case "bispo":   
     console.log("diagonal");
    break;

    case "rei":   
     console.log("uma casa qualquer direção");
    break;

    case "torre":   
     console.log("linha reta vertical e horizontal");
    break;

    default:
        console.log("error");
}

// 7-Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = 40;
let porcetagemNota= nota / 100

if (nota <= 0 || nota > 100) {
    console.log("erro");
} 
else if (porcetagemNota >= 0.9) {
    console.log("A");
} 
else if (porcetagemNota >= 0.8) {
    console.log("B");
} 
else if (porcetagemNota >= 0.7) {
        console.log("C");
      }      
else if (porcetagemNota >= 0.6) {
            console.log("D");
           }     
else if (porcetagemNota>= 0.5  ) {
                console.log("E");
                
               }    
else if (porcetagemNota < 0.5) {
                    console.log("F");
               }

//   8-Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
 
let numOne = 10;
let numTwo = 15;
let numTre = 30;

if(numOne % 2===0 || numTwo % 2===0 || numTre % 2===0) {
    console.log ("true")
} else {
    console.log("false")
}

// 9-Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

let num1 = 10;
let num2 = 20;
let num3 = 30;

if(num1 % 2!==0 || num2 % 2!==0 || num3 % 2!==0) {
    console.log ("true")
} else {
    console.log("false")
}

// 10-
let custoProduto= 100;
let valorDeVenda = 200;
 if (custoProduto < 0 || valorDeVenda < 0) {
     console.log("error");
} 
else { let valorCustoTotal = custoProduto * 1.2;
    let valorLucro = valorDeVenda - valorCustoTotal;
    let quantidade = 1000;
    let resultado= valorLucro * quantidade;
    
    console.log(resultado);
}
 


