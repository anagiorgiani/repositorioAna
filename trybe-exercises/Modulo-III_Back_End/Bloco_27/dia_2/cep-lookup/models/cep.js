const connection = require('./connection');

const findCep = async (cep) => {
  const [ cep ] = await connection.execute(
    "SELECT * from cep_lookup.ceps WHERE cep=?;", [cep]
  );
  return cep;
};

const createCep = async (cep, log, bairro, local, uf) =>
  connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [cep, log, bairro, local, uf]
  );



module.exports = {
  findCep,
  createCep,
};
