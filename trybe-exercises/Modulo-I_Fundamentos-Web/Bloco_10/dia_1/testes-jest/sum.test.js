const sum = require('../exercises-jest/sum');

describe('requisito 1', () => {
    it('a função recebe 4, 5 e retorna 9', () => {
        expect(9).toEqual(sum(4,5))

    });
    it('a função recebe 0, 0 e retorna 0', () => {
        expect(0).toEqual(sum(0,0))

});
   test('lança um erro quando number for string', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  test('testa se a mensagem de erro é " tipo string"', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });

})




// // A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") 