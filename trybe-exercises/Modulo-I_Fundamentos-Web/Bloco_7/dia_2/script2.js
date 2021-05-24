const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const turnoManha = () => {

    let newKey = 'turno';
    const turno = 'manhã';
    lesson2[newKey] = turno;
    console.log(lesson2);
}

turnoManha();


const keys = () => {


    console.log(Object.keys(lesson1))

}
keys()



const sizeObj = (obj) => Object.keys(obj).length;
console.log(sizeObj(lesson1));



const valuesObj = () => {


    console.log(Object.values(lesson1))

}
valuesObj()

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })
console.table(allLessons)




const getNumberOfStudents = (obj) => {

    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
        total += obj[array[index]].numeroEstudantes;
    }
    return total;
};
console.log(getNumberOfStudents(allLessons));



const position = () => {
    const parChaveValor = Object.values(lesson3);
    console.log(parChaveValor[2]);
}

position();



const checkObj = (obj, chave, valor) => {

    arrayObj = Object.entries(obj);

    let isTrueorFalse = false;

    for (let key in arrayObj) {

        if (arrayObj[key][0] === chave && arrayObj[key][1] && valor) isTrueorFalse = true;
    }

    return isTrueorFalse;

}
console.log(checkObj(lesson3, 'turno', 'noite'))
