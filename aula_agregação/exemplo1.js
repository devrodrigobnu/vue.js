class Mae {
    constructor(nome) {
        this.nome = nome
    }
}

class Filho {
    constructor(nome,mae){
        this.nome = nome
        this.mae = mae
    }
}

let m = new Mae('Albertina')

console.log(m.nome)

let f = new Filho('Beto', m)

class Endereco {
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }
}

class Funcionario{
    constructor(nome, cargo, salario, endereco){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
        this.endereco = endereco
    }
}

let e1 = new Endereco('Rua 7 de Setembro', 'Centro', 'Blumenau', 'SC')
let f1 = new Funcionario('Carmila Camargo', 'Manicure', 15678, e1)


let funcionarios = []

while(true){
    let menu = prompt('1-Novo Funcionários\n2-Ver Funcionarios\n3-Sair')
    
    if (menu === null) {
        alert('Operação cancelada. Saindo do programa.');
        break;
    }
    if(menu == '1'){
        let n = prompt('Digite o nome: ')
        let c = prompt('Digite o cargo: ')

        let funcionario = {
            nome: n,
            cargo: c
        }
        funcionarios.push(funcionario)
    } else if (menu == '2') {
        funcionarios.forEach(func =>{
            alert(`Nome: ${func.nome}\nCargo: ${func.cargo}`)
        })
    } else if (menu == '3'){
        break;
    } else {
        alert('Opção inválida')
    }
}