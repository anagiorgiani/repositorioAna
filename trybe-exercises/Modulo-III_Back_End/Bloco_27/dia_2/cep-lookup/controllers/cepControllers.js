
const rescue = require('express-rescue');
const { createCep, findCep } = require('../services/cepServices');

const createCep = rescue(async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const response = await createCep(
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  );

  res.status(200).json(response);
  next();
});

const findCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const response = await findCep(cep);

  const CODE = response.error ? 400 : 200;

  res.status(CODE).json(response);
  next();
});

module.exports = {
  createCep,
  findCep,
};