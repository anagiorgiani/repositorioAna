const readLine = require("readline-sync");


function Velocidade(){
    const distancia = readLine.questionInt("Qual sua distancia percorrida em metros? ");
    const tempo = readLine.questionInt("Qual o tempo em segundos da distancia percorrida? ");
    const resultado = (distancia / tempo).toFixed(2);
    console.log(`Sua velocidade média foi ${resultado}`);
}

Velocidade();