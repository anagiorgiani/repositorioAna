-- Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
-- Nome;
-- Espécie;
-- Sexo;
-- Idade;
-- Localização.
-- Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.
-- Siga os passos aprendidos no dia de hoje para modelar essa base de dados.


CREATE DATABASE IF NOT EXISTS ZOO;
USE ZOO;

CREATE TABLE ESPECIE(
especie_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(50)
);

CREATE TABLE LOCALIZACAO(
localizacao_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
localizacao VARCHAR(100)
);


CREATE TABLE ANIMAL(
animal_id INT PRIMARY KEY AUTO_INCREMENT,
especie_id INT NOT NULL,
localizacao_id INT NOT NULL,
nome VARCHAR(30) NOT NULL,
idade INT NOT NULL,
sexo CHAR(1) NOT NULL,
FOREIGN KEY(especie_id) REFERENCES ESPECIE(especie_id),
FOREIGN KEY(localizacao_id) REFERENCES LOCALIZACAO(localizacao_id)
);

CREATE TABLE GERENTE(
gerente_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
gerente VARCHAR(100)
);

CREATE TABLE CUIDADOR(
cuidador_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(100),
gerente_id INT NOT NULL,
FOREIGN KEY(gerente_id) REFERENCES GERENTE(gerente_id)
);

CREATE TABLE CUIDADORANIMAL(
cuidador_id INT NOT NULL,
animal_id INT NOT NULL,
FOREIGN KEY(animal_id) REFERENCES ANIMAL(animal_id),
FOREIGN KEY(cuidador_id) REFERENCES CUIDADOR(cuidador_id)
);





