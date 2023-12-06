CREATE DATABASE laboratorio;
USE laboratorio;

CREATE TABLE clientes (
	Id INT PRIMARY KEY auto_increment,
    Nome VARCHAR(50),
    Sobrenome VARCHAR(50),
    Telefone VARCHAR(20),
	Endereco VARCHAR(100),
    Email VARCHAR(50)
);

CREATE TABLE produtos (
	Id INT PRIMARY KEY auto_increment,
    Produto VARCHAR(100),
    Tipo VARCHAR(50),
    Descricao TEXT,
    Preco DECIMAL(10,2),
    Data_Cadastro DATE    
);

CREATE TABLE compras (
	Id INT PRIMARY KEY auto_increment,
    Data_Compra DATE,
    Total_Compra DECIMAL(10,2),
    Forma_Pagamento VARCHAR(50),
    Status_Entrega VARCHAR(20),
    IdCliente INT REFERENCES clientes(id),
    idProduto INT REFERENCES produtos(id)
);

CREATE TABLE elementos (
	Id INT PRIMARY KEY auto_increment,
    Nome VARCHAR(30),
    Numero_Atomico INT,
    Simbolo_Quimico VARCHAR(5),
    Peso_Atomico DECIMAL(10,2)
);

CREATE TABLE formulas (
	Id INT PRIMARY KEY auto_increment,
    Nome VARCHAR(30),
    Descricao TEXT,
    Formula TEXT
);

CREATE TABLE controle_elementos (
	Id INT PRIMARY KEY AUTO_INCREMENT,
    IdElemento INT REFERENCES elementos(id),
    IdFormula INT REFERENCES formulas(id)
);

INSERT INTO clientes (Nome, Sobrenome, Telefone, Endereco, Email) VALUES
('João', 'Silva', '+55 11 98765-4321', 'Rua A, 123', 'joao.silva@email.com'),
('Maria', 'Santos', '+55 21 98765-6789', 'Avenida B, 456', 'maria.santos@email.com'),
('Carlos', 'Oliveira', '+55 31 98765-8765', 'Rua C, 789', 'carlos.oliveira@email.com'),
('Ana', 'Pereira', '+55 41 98765-5432', 'Avenida D, 101', 'ana.pereira@email.com'),
('Pedro', 'Ribeiro', '+55 51 98765-2345', 'Rua E, 202', 'pedro.ribeiro@email.com'),
('Mariana', 'Cruz', '+55 61 98765-7654', 'Avenida F, 303', 'mariana.cruz@email.com'),
('Fernando', 'Almeida', '+55 71 98765-3210', 'Rua G, 404', 'fernando.almeida@email.com'),
('Isabela', 'Machado', '+55 81 98765-6789', 'Avenida H, 505', 'isabela.machado@email.com'),
('Ricardo', 'Lima', '+55 91 98765-9876', 'Rua I, 606', 'ricardo.lima@email.com'),
('Camila', 'Martins', '+55 31 98765-6543', 'Avenida J, 707', 'camila.martins@email.com');

INSERT INTO produtos (Produto, Tipo, Descricao, Preco, Data_Cadastro) VALUES
('Notebook', 'Eletrônicos', 'Notebook com processador i5, 8GB RAM, 512GB SSD', 2499.99, '2023-01-15'),
('Smartphone', 'Eletrônicos', 'Smartphone com tela OLED, câmera de 48MP', 899.99, '2023-02-20'),
('Cadeira Gamer', 'Móveis', 'Cadeira ergonômica para jogos com suporte lombar', 399.99, '2023-03-10'),
('Livro "Aventuras Fantásticas"', 'Livros', 'Um emocionante livro de aventuras para jovens leitores', 29.99, '2023-04-05'),
('Fones de Ouvido Bluetooth', 'Eletrônicos', 'Fones de ouvido sem fio com cancelamento de ruído', 129.99, '2023-05-12'),
('Máquina de Café', 'Eletrodomésticos', 'Máquina de café automática com moedor integrado', 149.99, '2023-06-18'),
('Mala de Viagem', 'Acessórios', 'Mala resistente com rodas giratórias e fechadura TSA', 79.99, '2023-07-25'),
('Câmera DSLR', 'Eletrônicos', 'Câmera profissional com sensor de 24MP e gravação em 4K', 1499.99, '2023-08-30'),
('Mouse Gamer', 'Eletrônicos', 'Mouse para jogos com iluminação RGB personalizável', 59.99, '2023-09-14'),
('Sapato Social', 'Calçados', 'Sapato social elegante e confortável para ocasiões formais', 89.99, '2023-10-01');


INSERT INTO compras (Data_Compra, Total_Compra, Forma_Pagamento, Status_Entrega, IdCliente, IdProduto) VALUES
('2023-01-20', 149.99, 'Cartão de Crédito', 'Entregue', 1, 2),
('2023-02-25', 899.99, 'Boleto Bancário', 'Em Processamento', 2, 5),
('2023-03-15', 399.99, 'Pix', 'Entregue', 3, 3),
('2023-04-10', 29.99, 'Cartão de Débito', 'Entregue', 4, 4),
('2023-05-18', 129.99, 'Cartão de Crédito', 'Em Processamento', 5, 1),
('2023-06-22', 149.99, 'Boleto Bancário', 'Entregue', 6, 6),
('2023-07-28', 79.99, 'Pix', 'Entregue', 7, 7),
('2023-08-31', 1499.99, 'Cartão de Crédito', 'Em Processamento', 8, 8),
('2023-09-16', 59.99, 'Cartão de Débito', 'Entregue', 9, 9),
('2023-10-05', 89.99, 'Pix', 'Entregue', 10, 10);


INSERT INTO elementos (Nome, Numero_Atomico, Simbolo_Quimico, Peso_Atomico) VALUES
('Hidrogênio', 1, 'H', 1.0),
('Hélio', 2, 'He', 4.06),
('Lítio', 3, 'Li', 6.94),
('Berílio', 4, 'Be', 9.01),
('Boro', 5, 'B', 10.81),
('Carbono', 6, 'C', 12.01),
('Nitrogênio', 7, 'N', 14.00),
('Oxigênio', 8, 'O', 15.99),
('Flúor', 9, 'F', 18.99),
('Neônio', 10, 'Ne', 20.18);

-- Inserções na tabela de fórmulas
INSERT INTO formulas (Nome, Descricao, Formula) VALUES
('Água', 'Molécula de água', 'H2O'),
('Dióxido de Carbono', 'Gás carbônico', 'CO2'),
('Ácido Sulfúrico', 'Ácido forte', 'H2SO4'),
('Metano', 'Gás natural', 'CH4'),
('Amônia', 'Gás de amônia', 'NH3'),
('Ácido Clorídrico', 'Ácido forte', 'HCl'),
('Óxido de Ferro', 'Óxido comum de ferro', 'Fe2O3'),
('Glicose', 'Açúcar simples', 'C6H12O6'),
('Ácido Acético', 'Vinagre', 'CH3COOH'),
('Dióxido de Enxofre', 'Gás poluente', 'SO2');

-- Inserções na tabela de controle_elementos
INSERT INTO controle_elementos (IdElemento, IdFormula) VALUES
(1, 1), -- Hidrogênio com a fórmula da Água
(2, 2), -- Hélio com a fórmula do Dióxido de Carbono
(3, 3), -- Lítio com a fórmula do Ácido Sulfúrico
(4, 4), -- Berílio com a fórmula do Metano
(5, 5), -- Boro com a fórmula da Amônia
(6, 6), -- Carbono com a fórmula do Ácido Clorídrico
(7, 7), -- Nitrogênio com a fórmula do Óxido de Ferro
(8, 8), -- Oxigênio com a fórmula da Glicose
(9, 9), -- Flúor com a fórmula do Ácido Acético
(10, 10); -- Neônio com a fórmula do Dióxido de Enxofre



-- Selecionar o nome e o telefone de todos os clientes.
SELECT Nome, Telefone FROM clientes;

-- Selecionar os produtos do tipo "Eletrônicos" com preço superior a 500 reais.
SELECT * FROM produtos WHERE Tipo = 'Eletronicos' AND preco > 500;

-- Selecionar as compras entregues feitas com Pix.
SELECT * FROM compras WHERE Forma_Pagamento = 'Pix';

-- Selecionar os elementos com peso atômico entre 10 e 15.
SELECT * FROM elementos WHERE Peso_Atomico BETWEEN 10 and 15;

-- Selecionar as fórmulas com mais de 20 caracteres na descrição.
SELECT * FROM formulas WHERE LENGTH(descricao) > 20;

-- Selecionar os elementos que estão vinculados a alguma fórmula na tabela de controle_elementos.
SELECT elementos.* FROM elementos
JOIN controle_elementos ON elementos.Id = controle_elementos.IdElemento;




