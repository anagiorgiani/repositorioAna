// Exercicio 1-
// // Crie uma função que recebe três parâmetros retorna uma Promise .
// // Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// // Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// // Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// // Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

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

somaNumeros(40, 10, 10)
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
