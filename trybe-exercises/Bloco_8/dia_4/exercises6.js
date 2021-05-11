const assert = require('assert');
const { listenerCount } = require('events');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
    [9, 8, 10, 7, 5], //valor1
    [10, 9, 9, 10, 8], //valor2
    [10, 7, 10, 8, 9] //valor3
];



function soma(a, b) {
    return a + b
}

function studentAverage() {
    const listNotas = [];
    grades.forEach(element => {
        const total = element.reduce(soma, 0);
        const notas = total / element.length;
        listNotas.push(notas);
    })

    const objEstudante = (listEstudantes, listNotas) => listEstudantes.map((students, index) =>
    ({ name: students, average: listNotas[index] }

    ));

    return objEstudante(students, listNotas)

}

const expected = [
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);