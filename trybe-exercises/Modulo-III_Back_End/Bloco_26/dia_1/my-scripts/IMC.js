const peso = 60;
const altura = 155;

function Imc() {
    // const resultado = (peso / Math.pow(altura / 100, 2)).toFixed(2); 
const convertAltura = altura / 100;
const resultado = peso / (convertAltura * convertAltura).toFixed(2); 
console.log(`Seu Imc é ${resultado}`);

}

Imc();

