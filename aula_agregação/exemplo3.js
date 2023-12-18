// Utilizando JSON E FOREACH
// CRIAR UM SISTEMA DE CADASTRO DE CARRO COM:
// Id, Marca, Modelo, ANo, Potência
//1-Cadastrar novo carro
//2-Ver carros cadastrados
//3-Calcular média de potencia dos carros cadastrados
//4-Excluir um carro (desafio)
//5-Sair


let carros = []

while (true) {
    let menu = prompt('1-Cadastrar Carro\n2-Ver Carros Cadastrados\n3-Média de potência dos Carros Cadastrados\n4-Excluir Carro\n5-Sair')

    if (menu === null) {
        alert('Operação cancelada!')
        break
    }

    if (menu == '1') {
        let id = carros.length + 1
        let marca = prompt('MARCA: ')
        let modelo = prompt('MODELO: ')
        let ano = Number(prompt('ANO: '))
        let potencia = Number(prompt('POTENCIA: '))

        let carro = {
            id: id,
            marca: marca,
            modelo: modelo,
            ano: ano,
            potencia: potencia
        };

        carros.push(carro)
        alert('Carro cadastrado com sucesso!')
    }

    if (menu == '2') {
        if (carros.length === 0) {
            alert(`Nenhum carro cadastrado.`)
        } else {
            alert(`Carros cadastrados:`)
            carros.forEach(carro => {
                alert(`ID: ${carro.id}, MARCA: ${carro.marca}, MODELO: ${carro.modelo}, ANO: ${carro.ano}, POTENCIA: ${carro.potencia}`)
            })
        }
    }

    if (menu == '3') {
        if (carros.length === 0) {
            alert(`Nenhum carro cadastrado.`)
        } else {
            let somaPotencia = 0
            for (let i = 0; i < carros.length; i++) {
                somaPotencia += carros[i].potencia
            }
            let mediaPotencia = somaPotencia / carros.length;
            alert(`Média de potência dos carros cadastrados: ${mediaPotencia.toFixed(2)}`)
        }   
    }

    if (menu == '4') {
        let idExcluir = Number(prompt('Digite o ID do carro a ser excluído: '))
        let indexExcluir = carros.findIndex(carro => carro.id === idExcluir)

        if (indexExcluir !== -1) {
            carros.splice(indexExcluir, 1)
            alert(`Carro excluído com sucesso.`)
        } else {
            alert('Carro não encontrado.')
        }
    }

    if (menu == '5') {
        alert('Saindo do programa...')
        break
    }

}
