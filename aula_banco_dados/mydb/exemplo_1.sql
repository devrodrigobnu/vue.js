CREATE DATABASE aluno;

USE aluno;

CREATE TABLE aluno (
	Id_Aluno INTEGER PRIMARY KEY,
    Nome_Aluno VARCHAR(100) NOT NULL,
    Sobrenome_Aluno VARCHAR(100) NOT NULL,
    Cpf_Aluno VARCHAR(11) NOT NULL,
    Turma_Aluno VARCHAR(100) NOT NULL    
);

INSERT INTO aluno VALUES
	(1,'rodrigo','luchtenberg','123456789','Vue.js'),
	(2,'felipe','lingner','123456789','Java'),
    (3,'alan','silva','123456789','python'),
    (4,'marina','souza','123456789','JavaScript');

SELECT Turma_Aluno FROM aluno;
SELECT * FROM aluno WHERE Turma_Aluno = 'Vue.js';





















































