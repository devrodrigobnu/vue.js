create database empresa_rodrigo;
use empresa_rodrigo;

create table clientes (
	id int primary key auto_increment,
    Nome_cliente varchar(50) not null,
    Email_cliente varchar(50) not null,
    Cidade_cliente varchar(50) not null
);

create table pedidos (
	id int primary key auto_increment,
    Numero_pedido int not null,
    Data_pedido DATE not null,
    Id_clientes int references clientes(id)
);

-- Inserts para a tabela clientes
INSERT INTO clientes (Nome_cliente, Email_cliente, Cidade_cliente) VALUES
('João Silva', 'joao@email.com', 'São Paulo'),
('Maria Oliveira', 'maria@email.com', 'Rio de Janeiro'),
('Carlos Santos', 'carlos@email.com', 'Belo Horizonte'),
('Ana Souza', 'ana@email.com', 'Brasília'),
('Fernanda Lima', 'fernanda@email.com', 'Salvador'),
('Ricardo Pereira', 'ricardo@email.com', 'Porto Alegre'),
('Lúcia Costa', 'lucia@email.com', 'Recife'),
('Gabriel Martins', 'gabriel@email.com', 'Fortaleza'),
('Patrícia Mendes', 'patricia@email.com', 'Curitiba'),
('Marcos Santos', 'marcos@email.com', 'Manaus');

-- Inserts para a tabela pedidos
INSERT INTO pedidos (Numero_pedido, Data_pedido, Id_clientes) VALUES
(1001, '2023-01-15', 1),
(1002, '2023-02-20', 3),
(1003, '2023-03-10', 5),
(1004, '2023-04-05', 2),
(1005, '2023-05-12', 4),
(1006, '2023-06-18', 6),
(1007, '2023-07-25', 8),
(1008, '2023-08-30', 10),
(1009, '2023-09-08', 7),
(1010, '2023-10-14', 9);


-- Lista de Clientes e Seus Pedidos:
-- o email, a cidade e, para cada cliente, liste os detalhes de todos os pedidos associados a esse cliente
SELECT pedidos.numero_pedido, clientes.nome_cliente, clientes.email_cliente, clientes.cidade_cliente
FROM clientes
INNER JOIN pedidos ON clientes.id = pedidos.id_clientes
order by clientes.nome_cliente asc;

-- Para cada cliente, exiba o nome do cliente, o email, a cidade e o número total de pedidos feitos por esse cliente.
SELECT clientes.Nome_cliente, clientes.Email_cliente, clientes.Cidade_cliente, COUNT(pedidos.id) as Total_Pedidos
FROM clientes
INNER JOIN pedidos ON pedidos.id_clientes = clientes.id
GROUP BY clientes.id;


-- Selecione o número do pedido, a data do pedido, o nome do cliente, o email e a cidade para cada pedido.
select pedidos.Numero_pedido, pedidos.Data_pedido, clientes.Nome_cliente, clientes.Email_cliente, clientes.Cidade_cliente
from pedidos
inner join clientes on pedidos.id_clientes = clientes.id;

-- Liste os clientes que ainda não fizeram nenhum pedido, exibindo o nome do cliente, o email, a cidade e qualquer outro atributo relevante.
-- Lembre-se de usar a cláusula INNER JOIN para combinar as informações das duas tabelas de maneira apropriada. Utilize aliases para tornar as consultas mais legíveis.
-- Dica: As tabelas podem ter campos como "ClienteID" em "Pedidos" que se relacionam com "ClienteID" em "Clientes".

select clientes.Nome_cliente, clientes.Email_cliente, clientes.Cidade_cliente
from clientes
left join pedidos on clientes.id = pedidos.id_clientes
where pedidos.id is null;



