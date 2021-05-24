// Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (name) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
          const animal = Animals.find((animal) => animal.name === name);
          if (animal) {
            return resolve(animal);
          };
           const messageError = 'Nenhum animal com esse nome!'
          return reject(messageError);
        }, 100);
    })
    );

  
  const getAnimal = (name) => {
    return findAnimalByName(name)
    .then(animal => animal);
  };
  
  

  module.exports = {findAnimalByName, getAnimal}