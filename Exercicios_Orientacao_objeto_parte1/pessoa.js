

class Pessoa {
    constructor(nome,idade,altura,peso){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc(){
        return this.peso / this.altura ** 2
    }

    calcularTaxaMetabolicaHomem(){
        return 88362 + (13397 * this.peso) + (4799 * this.altura) - (5677 * this.idade)
    }

    calcularTaxaMetabolicaMulher(){
        return 447593 + (9247 * this.peso) + (3098 * this.altura) - (4330 * this.idade)
    }

    mostrarInformacoes(){
        return [this.nome, this.idade, this.altura, this.peso]
    }
}

let nome = prompt('Digite seu nome: ')
let idade = Number(prompt('Digite sua idade: '))
let altura = parseFloat(prompt('Digite sua altura: '))
let peso = parseFloat(prompt('Digite seu peso: '))

let p1 = new Pessoa(nome, idade, altura, peso)

while(true){
    alert(`${p1.nome}, seja bem vindo ao sistema Nutri ProWay!`)

    let menu = prompt('1-Calcular IMC\n2-Calcular Taxa Metabólica\n3-Sair')

    switch(menu){
        case '1':
            let imc = p1.calcularImc();
            alert(`${p1.nome}, seu IMC é: ${imc.toFixed(2)}`);
            break;
        case '2':
            let sexo = prompt('Digite seu sexo (M-Masculino) ou (F-Feminino)').toUpperCase();
            let taxaMetabolica;

            if(sexo === 'M'){
                taxaMetabolica = p1.calcularTaxaMetabolicaHomem
            } else if (sexo === 'F'{
                taxaMetabolica = p1.calcularTaxaMetabolicaMulher
            } else {
                alert(`Opção inválida!`)
                break;
            }
        case '3':
            alert('Saindo do sistema Nutri ProWay!');
            break;

        default:
            alert('Opção inválida, tente novamente!')
    }
}