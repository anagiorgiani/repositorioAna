const readLine = require("readline-sync");

function Imc() {
	const peso = readLine.questionFloat("Qual seu peso em kg?");
  const altura = readLine.questionInt("Qual sua altura em cm?");
  // const convertAltura = altura / 100;
  const resultado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  // const resultado = peso / (convertAltura * convertAltura).toFixed(2);
	if(resultado < 18.5){
		console.log(`Seu IMC ${resultado} está abaixo do peso (Magreleza)`);
	}
	if(resultado >= 18.5 && resultado <= 24.9){
		console.log(`Seu IMC ${resultado} peso normal (Continue assim)`);
	}
	if(resultado >= 25.0 && resultado <= 29.9){
		console.log(`Seu IMC ${resultado} esta acima do peso (sobrepeso)`);
	}
	if(resultado >= 30.0 && resultado <= 34.9){
		console.log(`Seu IMC ${resultado} obesidade I (cuidado)`);
	}
	if(resultado >= 35.0 && resultado <= 39.9){
		console.log(`Seu IMC ${resultado} obesidade II (cuidado redobrado)`);
	}
	if(resultado >= 40.0 ){
		console.log(`Seu IMC ${resultado} obesidade III e IV (risco de morte)`);
 
}
}

Imc();
