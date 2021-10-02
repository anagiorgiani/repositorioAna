// Exercicio 4-
// // 1- Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// // 2- Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// // 3- Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// // 4- Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// // 5- Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// // 6- Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

const fs = require('fs').promises;

// 1-
const nomeDoArquivo = 'simpsons.json';

fs.readFile(nomeDoArquivo, 'utf8')

  .then((data) => {
    return JSON.parse(data);
  })
  .then((date) => {
      const newi = date.map(({id, name}) => `${id}, ${name}`)
      console.log(newi) 
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });

  _________________________________________________________________________________________________________________________

  
// 2-
  const nomeDoArquivo2 = 'simpsons.json';

    function selecionaPersonagem(num) {

    const promise = new Promise((resolve, reject) => {
    fs.readFile(nomeDoArquivo2, 'utf8')

  .then((data) => {
    return JSON.parse(data);
  })
  .then((date) => {
       const dat = date.find((id => id.id === num))
 
    if (dat !== undefined && dat.id === num) {
      resolve(dat) 
  }
    reject(" id invalido")
  

  })})
    return promise;
 }


  
 selecionaPersonagem("5")
 .then((result) => console.log(result))
 .catch((err) => console.error(err));

 ______________________________________________________________________________________________________________________________
 
//  3-
 
 const nomeDoArquivo3 = 'simpsons.json';
 
    async function filtraPersonagem() {
 
      const result = await fs.
      readFile(nomeDoArquivo3, 'utf8')
      .then((data) => JSON.parse(data));
     
       const newResult = result.filter((id => id.id === "6" || id.id === "10"))
       await fs.writeFile(nomeDoArquivo3, JSON.stringify(newResult))
   }


  filtraPersonagem()
 
  _____________________________________________________________________________________________________________________________
 
// 4- 

 const nomeDoArquivo4 = 'simpsons.json';
 const newFile = 'simpsonFamily.json'
 
    async function novoArquivo() {
 
      const result = await fs.
      readFile(nomeDoArquivo4, 'utf8')
      .then((data) => JSON.parse(data));
     
       const newResult = result.filter((id => id.id === "1" || id.id === "2" || id.id === "3" || id.id === "4"))
       await fs.writeFile(newFile, JSON.stringify(newResult))
   }


  novoArquivo();

  __________________________________________________________________________________________________________________________

// 5-


const newFile = 'simpsonFamily.json'

   async function novoPersonagem() {

     const result = await fs.
     readFile(newFile, 'utf8')
     .then((data) => JSON.parse(data));
    
      result.push({ "id": "8","name": "Nelson Muntz" })
      await fs.writeFile(newFile, JSON.stringify(result))
  }


 novoPersonagem();

 __________________________________________________________________________________________________________________________

// 6- Gabarito***

function replaceNelson () {
    // Realizamos a leitura do arquivo
    return fs.readFile('./simpsonsFamily.json', 'utf-8')
      // Interpretamos o conteúdo como JSON
      .then((fileContent) => JSON.parse(fileContent))
      // Filtramos o array para remover o personagem Nelson
      .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
      // Criamos um novo Array contendo a personagem Maggie
      .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
        .concat([{ id: '8', name: 'Maggie Simpson' }]))
      // Escrevemos o novo array no arquivo
      .then((simpsonsWithMaggie) =>
        fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
  }



