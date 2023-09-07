//  Faça um programa que leia e valide as seguintes informações:
// 	nome: maior que 3 caracteres;
// 	Idade: entre 0 e 150;
// 	Salário: maior que zero;
// 	Sexo: 'f' ou 'm';
// 	Estado Civil: 's', 'c', 'v', 'd';

const req = require('prompt-sync')
const prompt = req()


let name = prompt('Enter your name: ')
while(name.length < 3){
    name = prompt('Name must have at least 3 characters, try again: ')
}

let age = Number(prompt('Enter your age: '))
while(age < 0 || age > 150){
    age = prompt('Invalid age, try again: ')
}

let salary = Number(prompt('Enter your salary: '))
while(salary <= 0){
    salary = prompt('Invalid salary, try again: ')
}

let gender = prompt('Enter "female" for female or "male" for male: ')
while(gender !== 'female' && gender !== 'male'){
    gender = prompt('Invalid gender entered, please re-enter:')
}

let status = prompt('Enter your marital status: "single", "married", "widowed", "divorced": ')
while(status !== 'single' && status !== 'married' && status !== 'widowed' && status !== 'divorced'){
    status = prompt('Invalid Status, try again: ')
}

console.log(`Your name is ${name}, gender ${gender}, ${age} years, com salário de R$${salary} reais, status is ${status}`)