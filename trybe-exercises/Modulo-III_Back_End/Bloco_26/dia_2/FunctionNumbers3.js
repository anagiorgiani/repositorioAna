// Exercicio 3-
// Reescreva o código do exercício anterior para que utilize async/await .

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

async function numAleatorio() {
  const parametros = [];

  for (var index = 0; index <= 3; index++) {
    var result = Math.floor(Math.random() * 100 + 1);
    parametros.push(result);
  }

  try {
    const retorno = await somaNumeros(...parametros);
    console.log(retorno);
  } catch (err) {
    console.error(err);
  }
}

numAleatorio();
