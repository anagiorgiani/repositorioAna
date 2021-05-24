const uppercase = require('../dia_2/exercises1')


    it ('testa função transfroma maiscula', done => {
  uppercase('ana', (callback)=> {
      expect(callback).toEqual('ANA');
      done();
  
  })
});
