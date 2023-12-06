CREATE DATABASE locadora;

USE locadora;

CREATE TABLE filmes (
	Id_filmes INTEGER PRIMARY KEY auto_increment,
    Titulo_filme VARCHAR(30) NOT NULL,
    Ano_filme INTEGER NOT NULL,
    Diretor_filme VARCHAR(30) NOT NULL,
    Genero_filme VARCHAR(30) NOT NULL,
    Bilheteria_filme VARCHAR(30) NOT NULL
);
    
INSERT INTO filmes (Titulo_filme, Ano_filme, Diretor_filme, Genero_filme, Bilheteria_filme) VALUES
	('Guerra dos Mundos', 2005, 'Steven Spielberg', 'Terror', '591.7 milhões'),
	('O Protetor 2', 2018, 'Antoine Fuqua', 'Ação', '190.4 milhões'),
    ('Homem-Aranha: De Volta ao Lar', 2017, 'Jon Watts', 'Ação/Aventura', '880.1 milhões'),
    ('O Caso de Cristo', 2017, 'Jon Gunn', 'Comedia', '17.7 milhões'),
    ('Interstellar', 2014, 'Christopher Nolan', 'Ficção científica', '703 milhões'),
    ('Superman IV - Em Busca da Paz', 1987, 'Sidney J. Furie', 'Ficção científica', '36.7 milhões');

    
SELECT * FROM filmes WHERE Ano_filme < 1990;
DELETE FROM filmes WHERE Id_filmes = 3;
SELECT * FROM filmes WHERE Diretor_filme = 'Steven Spielberg' AND Genero_filme = 'Terror';
SELECT * FROM filmes WHERE Genero_filme = 'Comédia';
UPDATE filmes SET Titulo_filme = 'Filme Alterado' WHERE Id_filmes = 4;

ALTER TABLE filmes ADD Duracao INT;

UPDATE filmes SET Duracao = 138 WHERE Id_filmes = 1;
UPDATE filmes SET duracao = 176 WHERE Id_filmes = 2;
UPDATE filmes SET Duracao = 90 WHERE Id_filmes = 3;
UPDATE filmes SET Duracao = 66 WHERE Id_filmes = 4;
UPDATE filmes SET Duracao = 120 WHERE Id_filmes = 5;

SELECT AVG(Duracao) from filmes;

