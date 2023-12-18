class Pessoa {
    constructor(nome,idade,altura,peso, genero){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.genero = genero;
    }

    calcularImc(){
        return this.peso / this.altura ** 2
    }

    calcularTaxaMetabolica() {
        if(this.genero.toLowerCase() === 'homem') {
            return 88362 + (13397 * this.peso) + (4799 * this.altura) - (5677 * this.idade)
        } else if (this.genero.toLowerCase() === 'mulher') {
            return 447593 + 9247 * this.peso + 3098 * this.altura - 4330 * this.idade;
        } else {
            return 'Gênero não reconhecido.'
        }
    }

    mostrarInformacoes(){
        return [this.nome, this.idade, this.altura, this.peso]
    }
}

let nome = prompt('Digite seu nome: ');
let idade = Number(prompt('Digite sua idade: '));
let altura = parseFloat(prompt('Digite sua altura (em metros): '));
let peso = parseFloat(prompt('Digite seu peso (em kg): '));
let genero = prompt('Digite seu gênero (homem/mulher): ');

let pessoa = new Pessoa(nome, idade, altura, peso, genero)
let continuar = true;

while(continuar) {
    alert(`${pessoa.nome}, seja bem-vindo ao sistema Nutri ProWay`)

    let menu = prompt('Escolha uma opção:\n1-Calcular IMC\n2-Calcular Taxa Metabólica\n3-Mostrar Informações\n4-Sair')

    switch(menu){
        case '1':
            let imc = pessoa.calcularImc()
            if(imc < 18.5) {
                alert(`${pessoa.nome}, seu IMC é: ${imc.toFixed(2)} e está abaixo do peso!`)
            } else if (imc <= 25) {
                alert(`${pessoa.nome}, seu IMC é: ${imc.toFixed(2)} e está com peso normal!`)
            } else if (imc <= 30) {
                alert(`${pessoa.nome}, seu IMC é: ${imc.toFixed(2)} e está com sobrepeso!`)
            } else {
                alert (`${pessoa.nome}, seu IMC é: ${imc.toFixed(2)} e está com obsidade!`)
            }
            break;
            
        case '2':
            let taxaMetabolica = pessoa.calcularTaxaMetabolica()
            alert(`${pessoa.nome}, sua taxa metabólica é: ${taxaMetabolica.toFixed(2)} cal/dia`)
            break;
        case '3':
            let info = pessoa.mostrarInformacoes()
            let imcInfo = pessoa.calcularImc()
            alert(`Informações:\nNome: ${info[0]}\nIdade: ${info[1]}\nAltura: ${info[2]}\nPeso: ${info[3]}\nIMC: ${imcInfo.toFixed(2)}`)
            break;
        case '4':
            alert('Saindo do sistema.')
            continuar = false
            break;

        default:
            alert('Opção inválida. Tente novamente!')
    }   
}