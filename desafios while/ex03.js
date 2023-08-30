//  Faça um programa que leia e valide as seguintes informações:
// 	Nome: maior que 3 caracteres;
// 	Idade: entre 0 e 150;
// 	Salário: maior que zero;
// 	Sexo: 'f' ou 'm';
// 	Estado Civil: 's', 'c', 'v', 'd';

const req = require('prompt-sync')
const prompt = req()


let nome = prompt('Digite o seu nome: ')
while(nome.length < 3){
    nome = prompt('Nome deve conter pelo menos 3 caracteres, digite novamente: ')
}

let idade = Number(prompt('Digite sua idade: '))
while(idade < 0 || idade > 150){
    idade = prompt('Idade inválida, digite novamente: ')
}

let salario = Number(prompt('Digite seu salário: '))
while(salario <= 0){
    salario = prompt('Salário inválido, digite novamente: ')
}

let sexo = prompt('Digite "feminino" para feminino ou "masculino" para masculino: ')
while(sexo !== 'feminino' && sexo !== 'masculino'){
    sexo = prompt('Sexo informado inválido, digite novamente:')
}

let estadoCivil = prompt('Digite seu estado civil: "solteiro", "casado", "viuvo", "divorciado": ')
while(estadoCivil !== 'solteiro' && estadoCivil !== 'casado' && estadoCivil !== 'viuvo' && estadoCivil !== 'divorciado'){
    estadoCivil = promtp('Estado civil informado inválido, digite novamente: ')
}

console.log(`Seu nome é ${nome}, do sexo ${sexo}, tem ${idade} anos, com salário de R$${salario} reais, estado civil é ${estadoCivil}`)