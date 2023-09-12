// 36.	Desenvolva um programa que faça a tabuada de um número qualquer 
// inteiro que será digitado pelo usuário, mas a tabuada não deve 
// necessariamente iniciar em 1 e terminar em 10, o valor inicial e final 
// devem ser informados também pelo usuário, conforme exemplo abaixo:
// Montar a tabuada de: 5
// Começar por: 4
// Terminar em: 7

// Vou montar a tabuada de 5 começando em 4 e terminando em 7:
// 5 X 4 = 20
// 5 X 5 = 25
// 5 X 6 = 30
// 	5 X 7 = 35

const req = require('prompt-sync')
const prompt = req()

let numero = Number(prompt('Informe um número: '))
let valorInicial = Number(prompt('Informe o valor inicial da tabuada: '))
let valorFinal = Number(prompt('Informe o valor final da tabuada: '))

if (valorFinal < valorInicial){
    console.log('Valor inicial deve ser maior que valor final!')
    return
}
if (valorInicial < 1){
    console.log('Valor inicial deve ser maior que 1')
}

for (let i = valorInicial; i <= valorFinal; i++){
    console.log(`Tabuada de ${numero} X ${i} = ${numero * i}`)
}