const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const fs = require("fs").promises;
const nomeDoArquivo = "simpsons.json";

//  Exercicio 1 -
//  Crie uma rota GET /ping
//  Sua rota deve retornar o seguinte JSON: { message: 'pong' }

app.get("/ping", function (req, res) {
  res.status(200).json({ message: "pong" });
});

// Exercicio 2-
// Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

app.post("/hello", function (req, res) {
  const { name } = req.body;
  hello.push(name);
  res.status(200).json({ message: `Helloo, ${name}` });
});
// Exercicio 3
// Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .

app.post("/greetings", function (req, res) {
  const { name, age } = req.body;
  if (parseInt(age, 10) > 17)
    return res.status(200).json({ message: `Hello, ${name}!` });
  if (parseInt(age, 10) <= 17)
    return res.status(401).json({ message: "Unauthorized" });
});

// Exercicio 4-
// Crie uma rota PUT /users/:name/:age .
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .

app.put("/users/:name/:age", function (req, res) {
  const { name, age } = req.body;
  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});
// Exercicio 5,6, 7 e 8
// Crie uma API de dados das personagens de Simpsons
// Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK .
// Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.
// Crie um endpoint GET /simpsons/:id
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .
// Crie um endpoint POST /simpsons .
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .

const simpsons = require("functionRead.js");

app.get(
  "/simpsons",
  rescue(async function (req, res) {
    const simp = await simpsons.readFile();
    res.status(200).json(simp);
  })
);

app.get("/simpsons/:id", function (req, res) {
  const { id } = req.params;
  const simpsons = await simpsons.readFile();
  const filter = simpsons.find((i) => i.id === id);
  if (!filter) {
    return res.status(404).json({ message: "simpsons not found!" });
  }
  return res.status(202).json(simpsons);
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.post(
  "/simpsons",
  rescue(async (req, res) => {
    const { id, name } = req.body;
    const simpsons = await simpsonsUtils.getSimpsons();
    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: "id already exists" });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    res.status(204).end();
  })
);

app.listen(3003, () => {
  console.log("Ouvindo a porta 3002");
});
