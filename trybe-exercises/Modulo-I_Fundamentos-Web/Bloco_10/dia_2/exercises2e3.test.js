// // 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.
// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

const {findUserById, getUserName} = require('../dia_2/exercises2e3')

describe('test exercise2', () => {
    it('verifica usuario Mark', () => {
        expect.assertions(1);
        return getUserName(4).then(userName => {
            expect(userName).toEqual('Mark');
        });
    });
    it('test usuario Paul', () => {
        expect.assertions(1);
        return getUserName(5).then(userName => {
            expect(userName).toEqual('Paul')
        });
    });
    it('testa retorno de erro', () => {
        expect.hasAssertions();

        return getUserName(3).catch(data => {
            expect(data).toEqual({ error: 'User with ' + 3 + ' not found.' });
        });
    })
})

describe('testa id usuario', () =>{
    it('testa return do id do usuario', async(done)=> {
        const response = await getUserName(4);
        expect(response).toEqual('Mark');
        done();
    });
    it('testa return do id do usuario', async(done)=> {
        const response = await getUserName(5);
        expect(response).toEqual('Paul');
        done();
})
})
   it('testa retorno de um erro', async(done)=> {
       try{
           await getUserName(3);
        } catch (error) {
            expect(error).toEqual({ error: 'User with ' + 3 + ' not found.' });
            done();
        }
       }
   )



