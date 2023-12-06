// Pessoa é a entidade (B.D).
class Pessoa {
                    // Parâmetros 
    constructor(id, nome, idade, genero){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
}
// p1 é objeto da entidade Pessoa que é um conjunto de atributos.
let p1 = new Pessoa(1,'Maria', 28, 'F')
console.log(p1)


// Exercício:
// Abstrair a entidade Carro, criar a classe
// e dois objetos instanciados

// Criado a Entidade Carro
class Carro {
    // Criado o constructor com os parâmetros
    constructor(id, marca, modelo, ano, tipo){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.tipo = tipo;
    }
}
// Criado os objetos com os atributos
let c1 = new Carro(1, 'Citroen', 'C4 Palace', 2012, 'Sedan')
let c2 = new Carro(2, 'Peugeot', '307', 2019, 'Hatch')

let listaCarros = [c1,c2]
console.log(listaCarros)

listaCarros.forEach(carro => {
    console.log(carro.marca)
})


// Exercício: 
// Abstrair a entidade Cidade com 8 atributos
// Criar 2 objetos 

class City {
    constructor(id, name, population, location, size, founder, neighborhood, altitude){
        this.id = id;
        this.name = name;
        this.population = population;
        this.location = location;
        this.size = size;
        this.founder = founder;
        this.neighborhood = neighborhood;
        this.altitude = altitude;
    }
}

let city1 = new City(1, 'Blumenau', 361.855, 'Vale do Itajaí', '519,837 km²', 'Hermann Bruno Otto Blumenau', 35, '21m')
let city2 = new City(2, 'Itajaí', 291.169, 'Vale do Itajaí', '289,255 km²', 'Agostinho Alves Ramos', 35, '2m')

let listaCidades = [city1, city2]
console.log(listaCidades)

listaCidades.forEach(city => {
    console.log(city.name)
})