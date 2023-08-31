//  Faça um programa que leia e valide as seguintes informações:
// 	Nome: maior que 3 caracteres;
// 	Idade: entre 0 e 150;
// 	Salário: maior que zero;
// 	Sexo: 'f' ou 'm';
// 	Estado Civil: 's', 'c', 'v', 'd';

const req = require('prompt-sync')
const prompt = req()


let nome = prompt('Enter your name: ');
while (nome.length < 3) {
    nome = prompt('Name must contain at least 3 characters. Please enter again: ');
}

let idade = Number(prompt('Enter your age: '));
while (idade < 0 || idade > 150 || isNaN(idade)) {
    idade = Number(prompt('Invalid age. Please enter again: '));
}

let salario = Number(prompt('Enter your salary: '));
while (salario <= 0 || isNaN(salario)) {
    salario = Number(prompt('Invalid salary. Please enter again: '));
}

let sexo = prompt('Enter "female" for female or "male" for male: ');
while (sexo !== 'female' && sexo !== 'male') {
    sexo = prompt('Invalid gender input. Please enter again: ');
}

let estadoCivil = prompt('Enter your marital status: "single", "married", "widowed", or "divorced": ');
while (estadoCivil !== 'single' && estadoCivil !== 'married' && estadoCivil !== 'widowed' && estadoCivil !== 'divorced') {
    estadoCivil = prompt('Invalid marital status input. Please enter again: ');
}

console.log(`Your name is ${nome}, gender is ${sexo}, age is ${idade} years, salary is $${salario}, and marital status is ${estadoCivil}.`);
