const { createCep, findCep } = require('../models/cep');


const createCep = async (cep, log, bairro, local, uf) => {
  if ([cep, log, bairro, local, uf].includes(undefined)) {
    return { error: { code: 'invalidData', message: 'Preencha todos campos' } };
  }

  if (!/^\d{5}-?\d{3}$/.test(cep)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  }

  const returnedCep = await findCep(cep);

  if (returnedCep[0]) {
    return {
      error: { code: 'alreadyExists', message: 'CEP já existente' },
    };
  }
};

const findCep = async (cep) => {
  if (!/^\d{5}-?\d{3}$/.test(cep)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } };
  }

  const returnedCep = await findCep(cep);

  if (!returnedCep.length) {
    return { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }

  return returnedCep[0];
};

module.exports = { findCep, createCep };