CREATE DATABASE spotify;

USE spotify;

CREATE TABLE musica (
    Id_Musica INTEGER PRIMARY KEY,
    Titulo VARCHAR(30) NOT NULL,
    Genero VARCHAR(20) NOT NULL,
    Artista VARCHAR(30) NOT NULL,
    Ano_Lancamento INTEGER NOT NULL
);
 INSERT INTO musica (Id_Musica, Titulo, Genero, Artista, Ano_Lancamento) VALUES
    (1, 'Bohemian Rhapsody', 'Rock', 'Queen', 1975),
    (2, 'Billie Jean', 'Pop', 'Michael Jackson', 1983),
    (3, 'Rolling in the Deep', 'Pop/Soul', 'Adele', 2010),
    (4, 'Imagine', 'Pop', 'John Lennon', 1971),
    (5, 'Shape of You', 'Pop', 'Ed Sheeran', 2017),
    (6, 'Stairway to Heaven', 'Rock', 'Led Zeppelin', 1971),
    (7, 'Despacito', 'Reggaeton', 'Luis Fonsi', 2017),
    (8, 'Sweet Child o Mine', 'Rock', 'Guns N Roses', 1987),
    (9, 'Thriller', 'Pop', 'Michael Jackson', 1982),
    (10, 'Hotel California', 'Rock', 'Eagles', 1976);

SELECT Titulo FROM musica WHERE Artista = 'Michael Jackson';
SELECT Artista FROM musica WHERE Genero = 'Rock';
SELECT Genero FROM musica WHERE Artista = 'Eagles';
SELECT * FROM musica WHERE Ano_Lancamento = 1987;

UPDATE musica SET Ano_Lancamento = 1980 WHERE Id_Musica = 1;
SELECT * FROM musica;

UPDATE musica SET Artista = 'Rodrigo' WHERE Id_Musica = 5;
SELECT * FROM musica;

