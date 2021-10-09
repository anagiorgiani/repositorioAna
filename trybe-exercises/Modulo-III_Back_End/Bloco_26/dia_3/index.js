const fs = require('fs');

function NumberTypes(num) {
  if (num > 1) return "Positivo"
  if (num < 0) return "Negativo";
  if (num === 0) return "Neutro";
	if( typeof num !== 'number') return "Não é do tipo Número"
  }


function escreveArquivo(nomeDoArquivo, conteudoArquivo) {

fs.writeFileSync(nomeDoArquivo, conteudoArquivo);
return "ok";
}



module.exports = {escreveArquivo, NumberTypes}