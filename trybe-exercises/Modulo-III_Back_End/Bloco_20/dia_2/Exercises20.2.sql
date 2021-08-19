-- Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste link .
-- Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
-- Escreva uma query para exibir três números em três colunas.
-- Escreva uma query para exibir a soma dos números 10 e 15.
-- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
-- Escreva uma query para exibir todas as informações de todos os cientistas.
-- Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
-- Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
-- Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
-- Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
-- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
-- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.

SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1 AS Column1, 2 AS Column2, 3 AS Column3;
SELECT 10 + 15;
SELECT 10 + 16 * 2;
SELECT * from Scientists.Scientists;
SELECT Name As 'Nome do Projeto', Hours as 'Tempo de Projeto' from Scientists.Projects;
SELECT Name from Scientists.Scientists ORDER BY Name;
SELECT Name from Scientists.Projects ORDER BY Name DESC;
SELECT CONCAT('O Projeto ', Name,  ' precisou de ', Hours, ' horas para ser concluído') from Scientists.Projects;
SELECT Name, Hours from Scientists.Projects  ORDER BY Hours DESC LIMIT 3; 
SELECT DISTINCT Project from Scientists.AssignedTo;
SELECT Name from Scientists.Projects  ORDER BY Hours DESC LIMIT 1; 
SELECT Name from Scientists.Projects  ORDER BY Hours LIMIT 1 OFFSET 1; 
SELECT * from Scientists.Projects  ORDER BY Hours LIMIT 5; 
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists') from Scientists.Scientists;

