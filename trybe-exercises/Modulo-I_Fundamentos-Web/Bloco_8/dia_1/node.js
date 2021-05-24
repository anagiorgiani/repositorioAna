// Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
const acordar = () => {
    return console.log('Acordando!!!');
};

// Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
const cafe = () => {
    return console.log('BOra tomar cafe')
}


// Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
const dormir = () => {
    return console.log('Partiu dormir!!');
};

// Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores.

const doingThings = (acordar, cafe, dormir) => {
    acordar();
    cafe();
    dormir();
}
doingThings(acordar, cafe, dormir)

