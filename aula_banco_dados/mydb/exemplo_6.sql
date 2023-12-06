CREATE DATABASE consultorio;
USE consultorio;

CREATE TABLE pacientes (
	id_paciente INT PRIMARY KEY,
    Nome VARCHAR(50)
);


CREATE TABLE medicos (
	Id_medico INT PRIMARY KEY,
    Nome VARCHAR(50)
);


CREATE TABLE consultas (
	Id INT PRIMARY KEY,
    Data_consulta DATE,
    Paciente_id INT REFERENCES pacientes(Id_paciente),
    Medico_id INT REFERENCES medicos(Id_medico)
);