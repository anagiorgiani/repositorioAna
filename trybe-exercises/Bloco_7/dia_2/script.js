
// atividades pré aula !

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

  customer.lastname = 'faria'
  console.log(customer)

 
 const Ana = {
     firstName: 'Silva',

 }
 
function addKey () {

let estadoCivil = 'estado civil'
let valorCivil = 'casado'
Ana.estadoCivil= valorCivil

console.log(Ana)
}

addKey()

// 


const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
 
  const habil = (student) => {

  const objetos = Object.keys(student);

  for ( obj in objetos){
    console.log(`${objetos[obj]}, Nível: ${student[objetos[obj]]}`);
  } 

}

console.log('Estudante 1');
habil(student1);

console.log('Estudante 2');
habil(student2);



const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('Pais:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };





