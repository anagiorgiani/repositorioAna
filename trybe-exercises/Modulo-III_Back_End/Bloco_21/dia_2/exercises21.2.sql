-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

USE Pixar;
SELECT t1.title, t2.domestic_sales, t2.international_sales
FROM Movies AS t1
INNER JOIN BoxOffice AS t2
ON t1.id = t2.movie_id;

SELECT t1.title, t2.domestic_sales, t2.international_sales
FROM Movies AS t1
INNER JOIN BoxOffice AS t2
ON t1.id = t2.movie_id
WHERE t2.international_sales > t2.domestic_sales;

SELECT t1.title, t2.rating
FROM Movies AS t1
INNER JOIN BoxOffice AS t2
ON t1.id = t2.movie_id
ORDER BY t2.rating DESC;

SELECT t1.name, t1.location, t2.title, t2.director, t2.year, t2.length_minutes
FROM Theater AS t1
LEFT JOIN Movies AS t2 
ON t1.id = t2.theater_id
ORDER BY t1.name;

SELECT t1.name, t1.location, t2.title, t2.director, t2.year, t2.length_minutes
FROM Theater AS t1
RIGHT JOIN Movies AS t2 
ON t1.id = t2.theater_id
ORDER BY t1.name;

SELECT t1.title, t2.rating
FROM ( SELECT title, id FROM Movies) AS t1
INNER JOIN BoxOffice AS t2
ON t1.id = t2.movie_id
WHERE t2.rating > 7.5;

SELECT t1.title, t1.year, t2.rating
FROM ( SELECT title, id, year FROM Movies) AS t1
INNER JOIN BoxOffice AS t2
ON t1.id = t2.movie_id
WHERE t1.year > 2009;

SELECT name, location FROM Theater AS t1
WHERE EXISTS(SELECT title, id FROM Movies AS t2
WHERE t1.id = t2.theater_id);

SELECT name, location FROM Theater AS t1
WHERE NOT EXISTS(SELECT title, id FROM Movies AS t2
WHERE t1.id = t2.theater_id);




