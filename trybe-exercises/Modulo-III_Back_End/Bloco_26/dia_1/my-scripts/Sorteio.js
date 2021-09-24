const readLine = require("readline-sync");

function Sorteio(){
    const num = readLine.questionInt("Digite um numero de 0 a 10?");
     const NumAleatorio = Math.floor(Math.random() * 10);
     if( num === NumAleatorio){
         console.log("Parabéns, número correto!");
     }
     if(num !== NumAleatorio){
         console.log(`Opa, não foi dessa vez. O número era ${NumAleatorio}`);
     }
    }
    Sorteio();

    function JogarNovamente(){
        const pergunta = readLine.question("Quer tentar jogar novamente? digite SIM. Se quiser finalizar o jogo digite NÃO!");
        if( pergunta === "SIM"){
             return Sorteio();
        }
    }

    JogarNovamente();