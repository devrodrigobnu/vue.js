// Faça um Programa que leia um número inteiro menor que 1000 
// e imprima a quantidade de centenas, dezenas e unidades do mesmo.
// Observando os termos no plural a colocação do "e", da vírgula entre outros. 
// Exemplo:
// 326 = 3 centenas, 2 dezenas e 6 unidades
// 12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310, 305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16

// para achar dezenas = Math.floor(num/10)
// para achar unidades = num % 10
// para achar centenas = Math.floor(num/100)

function Main(num) {
    if (num >= 0 && num <= 1000) {
        const dezenas = Math.floor(num / 10)
        const unidades = num % 10
        const centenas = Math.floor(num / 100)
        console.log(`O número ${num} tem ${centenas} centenas, ${dezenas} dezenas e ${unidades} unidades!`)
    } else {
        console.log('Dados inválidos')
    }
}

let num = Number(prompt('Digite um número entre 0 e 1000'))
Main(num)