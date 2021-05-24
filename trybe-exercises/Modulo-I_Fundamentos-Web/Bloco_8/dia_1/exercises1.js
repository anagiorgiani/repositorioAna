
const createEmployee = (fullName) => {

    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, Email: `${email}@trybe.com` }
}

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    }
    return employees;

};
console.log(newEmployees(createEmployee));



// Primeira atividade de HOF realizado com a dupla Gabriela Azevedo !! 

const gumble = (ramdomNum1) => {
    let num = 4;
    if (num === ramdomNum1) {
        console.log('Parabéns você ganhou!!!');
    } else {
        console.log('Tente novamente');
    }
}

const result = (callback) => {
    let ramdomNum1 = Math.floor(Math.random() * 5 + 1);
    callback(ramdomNum1);
    return ramdomNum1;
}
console.log(result(gumble)); 