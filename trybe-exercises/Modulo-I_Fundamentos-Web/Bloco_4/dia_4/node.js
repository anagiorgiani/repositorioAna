// Parte I - Objetos e For/In
// Usando o objeto abaixo, faça os exercícios a seguir:
// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(' Bem- vinda' + ' ' + info.personagem)

//   2- Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'sim'

console.log(info);

//  3- Faça um for/in que mostre todas as chaves do objeto.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'sim'

for (let key in info)
  console.log(key)

// 4- Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

let info = {
  personagem: ['Margarida', 'Tio Patinhas'],
  origem: ['Pato Donald','Christmas on Bear Mountain, Dells Four Color Comics #178'],
  nota: ['Namorada do personagem principal nos quadrinhos do Pato Donald', 'O último MacPatinhas'],
};

info['recorrente'] = 'sim', 'sim'


for (let key in info)
  console.log(info[key])

   // 5-  

   let info = {
    personagem: ['Margarida', 'Tio Patinhas'],
    origem: ['Pato Donald','Christmas on Bear Mountain, Dells Four Color Comics #178'],
    nota: ['Namorada do personagem principal nos quadrinhos do Pato Donald', 'O último MacPatinhas'],
  };

  
  info['recorrente'] = 'sim'

  for (let keys in info) {
  console.log (info[keys])
  }


