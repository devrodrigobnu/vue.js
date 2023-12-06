create database netflix;
use netflix;

create table diretores (
	id int primary key auto_increment,
    Nome varchar(50),
    Idade int,
    Nacionalidade varchar(50)
);

create table series (
	id int primary key auto_increment,
    Titulo varchar(50),
    Resumo varchar(255),
    Genero varchar(50),
    Id_diretor int references diretores(id)
);

-- Inserção de dados na tabela 'diretores'
INSERT INTO diretores (Nome, Idade, Nacionalidade) VALUES ('Christopher Nolan', 51, 'Reino Unido');
INSERT INTO diretores (Nome, Idade, Nacionalidade) VALUES ('Quentin Tarantino', 58, 'Estados Unidos');
INSERT INTO diretores (Nome, Idade, Nacionalidade) VALUES ('Greta Gerwig', 38, 'Estados Unidos');
INSERT INTO diretores (Nome, Idade, Nacionalidade) VALUES ('Bong Joon-ho', 52, 'Coreia do Sul');
INSERT INTO diretores (Nome, Idade, Nacionalidade) VALUES ('Ava DuVernay', 49, 'Estados Unidos');
INSERT INTO diretores (Nome, Idade, Nacionalidade) VALUES ('Guillermo del Toro', 57, 'México');
INSERT INTO diretores (Nome, Idade, Nacionalidade) VALUES ('Sofia Coppola', 50, 'Estados Unidos');
INSERT INTO diretores (Nome, Idade, Nacionalidade) VALUES ('Denis Villeneuve', 54, 'Canadá');
INSERT INTO diretores (Nome, Idade, Nacionalidade) VALUES ('Hayao Miyazaki', 81, 'Japão');
INSERT INTO diretores (Nome, Idade, Nacionalidade) VALUES ('Jordan Peele', 43, 'Estados Unidos');

-- Inserção de dados na tabela 'series'
INSERT INTO series (Titulo, Resumo, Genero, Id_diretor) VALUES ('Inception', 'A dream within a dream within a dream.', 'Ficção Científica', 1);
INSERT INTO series (Titulo, Resumo, Genero, Id_diretor) VALUES ('Pulp Fiction', 'Crime, Drama e Thriller entrelaçados.', 'Crime', 2);
INSERT INTO series (Titulo, Resumo, Genero, Id_diretor) VALUES ('Lady Bird', 'A jornada de uma jovem durante o último ano do ensino médio.', 'Drama', 3);
INSERT INTO series (Titulo, Resumo, Genero, Id_diretor) VALUES ('Parasite', 'Uma família pobre infiltra-se em uma família rica.', 'Drama', 4);
INSERT INTO series (Titulo, Resumo, Genero, Id_diretor) VALUES ('When They See Us', 'Baseada em eventos reais, aborda a injustiça racial.', 'Drama', 5);
INSERT INTO series (Titulo, Resumo, Genero, Id_diretor) VALUES ('The Shape of Water', 'Romance entre uma mulher muda e uma criatura anfíbia.', 'Fantasia', 6);
INSERT INTO series (Titulo, Resumo, Genero, Id_diretor) VALUES ('Lost in Translation', 'Conexões inesperadas em Tóquio.', 'Drama', 7);
INSERT INTO series (Titulo, Resumo, Genero, Id_diretor) VALUES ('Blade Runner 2049', 'Investigação em um futuro distópico.', 'Ficção Científica', 8);
INSERT INTO series (Titulo, Resumo, Genero, Id_diretor) VALUES ('Spirited Away', 'Uma garota em um mundo mágico para resgatar seus pais.', 'Animação', 9);
INSERT INTO series (Titulo, Resumo, Genero, Id_diretor) VALUES ('Get Out', 'Suspense psicológico sobre racismo.', 'Suspense', 10);


select series.titulo, diretores.nome
from series
inner join diretores on series.id_diretor = diretores.id
where diretores.nacionalidade = 'Estados Unidos';

select series.genero, diretores.idade
from series
inner join diretores on series.id_diretor = diretores.id
where diretores.idade > 40;

select count(*) as Numero_De_Entradas	
from series
inner join diretores on series.id_diretor = diretores.id
where diretores.nacionalidade = 'Estados Unidos' and series.genero = 'Drama';







