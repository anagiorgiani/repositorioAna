const fs = require('fs').promises;
nomeDoArquivo = 'simpsons.json';


function readFile(){
   return fs.readFile(nomeDoArquivo, 'utf8')

  .then((data) => {
    return JSON.parse(data);
  })
}

function writeFile(newPerson){
    return fs.writeFile(nomeDoArquivo, JSON.stringify(newPerson))
  }


  module.exports = { readFile, writeFile };