const myFizzBuzz = require("../exercises-jest/myFizzBuzz");

describe('requisito 4', () => {
    it('Retorna fizzbuzz se num for divisivel por 3 e 5', () =>{
        expect('fizzbuzz').toEqual(myFizzBuzz(15))
    })
    it('Retorna fizz se num for divisivel por 3', () =>{
        expect('fizz').toEqual(myFizzBuzz(9))
    })
    it('Retorna buzz se num for divisivel por 5', () =>{
        expect('buzz').toEqual(myFizzBuzz(20))
    })
    it('Retorna num se num não for divisivel por 3 nem 5', () =>{
        expect(4).toEqual(myFizzBuzz(4))
    })
    it('Retorna false se num for diferente do tipo number', () =>{
        expect(false).toEqual(myFizzBuzz('a'))
    })
})















// // A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , 
// retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , 
// retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado 