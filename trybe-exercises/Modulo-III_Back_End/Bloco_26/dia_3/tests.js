const { expect } = require("chai");
const sinon = require('sinon');
const fs = require('fs');

const {NumberTypes, escreveArquivo} = require("./index");

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe("Quando um número for maior que 1", () => {
  it("retorna é um numéro positivo", () => {
    const resposta = NumberTypes(2);
    expect(resposta).to.be.equals("Positivo");
  });
});

describe("Quando um número for menor que 0", () => {
  it("retorna é um numéro negativo", () => {
    const resposta = NumberTypes(-1);
    expect(resposta).to.be.equals("Negativo");
  });
});

describe("Quando um número for igual ao 0", () => {
  it("retorna é um numéro neutro", () => {
    const resposta = NumberTypes(0);
    expect(resposta).to.be.equals("Neutro");
  });
});

describe("Quando o parametro for diferente do tipo Number", () => {
  it("retorna o valor deverá ser um número", () => {
    const resposta = NumberTypes("Olá");
    expect(resposta).to.be.equals("Não é do tipo Número");
  });
});


describe('Executa a função escrevaArquivo', () => {
  describe('a resposta', () => {
		before(() => {
		sinon.stub(fs, 'writeFileSync')
		});
		after(() => {
      fs.writeFileSync.restore();
    });
    it('é uma "string"', () => {
      const resposta = escreveArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = escreveArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('ok');
    });
  });
});
