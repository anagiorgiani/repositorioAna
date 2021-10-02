// Exercicio 2-
// // Escreva um código para consumir a função construída no exercício anterior.
// // Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// // Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// // Utilize then e catch para manipular a Promise retornada pela função:
// // Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// // Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

function somaNumeros(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (
      typeof num1 !== "number" ||
      typeof num2 !== "number" ||
      typeof num3 !== "number"
    ) {
      reject(new Error("Informe apenas números"));
    }
    const resultado = (num1 + num2) * num3;
    if (resultado < 50) {
      reject("Núm inválido");
    }
    resolve(resultado);
  });

  return promise;
}

somaNumeros(10, 10, 10)
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));

function numAleatorio() {
  const parametros = [];
  for (var index = 0; index <= 3; index++) {
    var result = Math.floor(Math.random() * 100 + 1);
    parametros.push(result);
  }
  return parametros;
}

somaNumeros(...numAleatorio())
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
