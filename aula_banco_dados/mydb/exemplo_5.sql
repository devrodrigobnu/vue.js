CREATE DATABASE super_herois;

USE super_herois;

CREATE TABLE herois (
	Id_heroi INTEGER PRIMARY KEY NOT NULL auto_increment,
    Nome VARCHAR(30) NOT NULL,
    Idade INT NOT NULL,
    Altura INT NOT NULL,
    Poder VARCHAR(50) NOT NULL,
    Team VARCHAR(30) NOT NULL    
);

INSERT INTO herois (Nome, Idade, Altura, Poder, Team)
VALUES
    ('Homem-Aranha', 28, 175, 'Agilidade e Teias', 'Os Vingadores'),
    ('Mulher Maravilha', 80, 183, 'Força e Sabedoria', 'Liga da Justiça'),
    ('Homem de Ferro', 50, 185, 'Armadura Tecnológica', 'Os Vingadores'),
    ('Superman', 35, 191, 'Super Força e Voo', 'Liga da Justiça'),
    ('Capitã Marvel', 30, 175, 'Poderes Cósmicos', 'Liga da Justiça'),
    ('Thor', 1500, 198, 'Mjölnir e Trovão', 'Os Vingadores'),
    ('Hulk', 40, 244, 'Força Incomensurável', 'Os Vingadores'),
    ('Flash', 28, 180, 'Supervelocidade', 'Liga da Justiça'),
    ('Pantera Negra', 35, 183, 'Força e Agilidade', 'Vingadores Secretos'),
    ('Mulher-Gato', 30, 170, 'Agilidade e Furtividade', 'Liga da Injustiça'),
    ('Doutor Estranho', 45, 182, 'Magia e Feitiçaria', 'Os Vingadores'),
    ('Lanterna Verde', 29, 188, 'Anel do Poder', 'Liga da Justiça'),
    ('Wolverine', 150, 160, 'Fator de Cura e Garras de Adamantium', 'X-Men'),
    ('Jean Grey', 27, 170, 'Telepatia e Telecinese', 'X-Men'),
    ('Capitão América', 99, 186, 'Escudo Indestrutível', 'Os Vingadores'),
    ('Aquaman', 35, 185, 'Comunicação com Peixes', 'Liga da Justiça'),
    ('Feiticeira Escarlate', 32, 170, 'Manipulação da Realidade', 'Os Vingadores'),
    ('Deadpool', 35, 188, 'Regeneração e Humor Irreverente', 'X-Force'),
    ('Hera Venenosa', 30, 175, 'Controle de Plantas', 'Sociedade da Flora'),
    ('Ciclope', 30, 191, 'Emissão de Raios Óticos', 'X-Men'),
    ('Motoqueiro Fantasma', 35, 188, 'Cavaleiro Sobrenatural', 'Defensores'),
    ('Arqueiro Verde', 32, 185, 'Arquearia e Armas', 'Liga da Justiça'),
    ('Viúva Negra', 36, 170, 'Espionagem e Combate', 'Os Vingadores'),
    ('Demolidor', 33, 183, 'Sentidos Aguçados e Combate', 'Defensores'),
    ('Tempestade', 30, 175, 'Controle do Clima', 'X-Men'),
    ('Fera', 40, 175, 'Inteligência e Agilidade', 'X-Men'),
    ('Lince Negra', 28, 165, 'Agilidade e Furtividade', 'X-Force'),
    ('Doutor Octopus', 55, 172, 'Tentáculos Mecânicos', 'Vilões Sinistros'),
    ('Venom', 30, 190, 'Simbionte e Força', 'Vilões Sinistros'),
    ('Coringa', 40, 180, 'Criminoso Psicótico', 'Liga da Injustiça');
    

SELECT * FROM herois WHERE Idade > 18;
SELECT * FROM herois WHERE Idade > 30 AND Team = 'x-men';
SELECT AVG(Idade) FROM herois;
SELECT * FROM herois WHERE Team = 'Liga da Justiça';
SELECT * FROM herois ORDER BY Nome ASC;
SELECT * FROM herois WHERE Nome LIKE 'c%' AND Idade > 18;





