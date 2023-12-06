USE spotify;

CREATE TABLE artista (
	Id_Artista INTEGER PRIMARY KEY auto_increment,
    Nome_Artista VARCHAR(30) NOT NULL,
    Genero_Artista VARCHAR(30) NOT NULL,
	Atuacao_Artista VARCHAR(30) NOT NULL,
    Altura_Artista FLOAT NOT NULL
);

INSERT INTO artista (Nome_Artista, Genero_artista, Atuacao_Artista, Altura_Artista) VALUES
	('James Hetfield', 'Masculino', 'Vocalista', 1.85),
	('Kelly Key', 'Feminino', 'Vocalista', 1.63),
    ('Lars Ulrich', 'Masculino','Baterista', 1.66),
    ('Kirk Hammett','Masculino','Guitarrista', 1.71),
    ('Robert Trujillo','Masculino','Baixista', 1.75);

SELECT * FROM artista;
SELECT Nome_Artista FROM artista;
SELECT Atuacao_Artista FROM artista;
SELECT * FROM artista WHERE Genero_Artista = 'Feminino';
SELECT Altura_artista FROM artista;
SELECT AVG(Altura_Artista) from artista;
SELECT * FROM artista WHERE Genero_Artista = 'Masculino' AND Atuacao_Artista = 'Guitarrista';

UPDATE artista SET Nome_Artista = 'Rodrigo Joel' WHERE id_Artista = 1;
UPDATE artista SET Altura_Artista = 1.99 WHERE Id_Artista = 3;
UPDATE artista SET Atuacao_Artista = 'Guitarrista' WHERE Id_Artista = 5;

SELECT * FROM artista;