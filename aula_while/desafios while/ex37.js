// Uma academia deseja fazer um censo entre seus 
// clientes para descobrir o mais alto, o mais baixo, 
// o mais gordo e o mais magro, para isto você deve fazer 
// um programa que pergunte a cada um dos clientes da academia
// seu código, sua altura e seu peso. O final da digitação de
// dados deve ser dada quando o usuário digitar 0 (zero) no 
// campo código. Ao encerrar o programa também deve ser informados 
// os códigos e valores do cliente mais alto, do mais baixo, do mais 
// gordo e do mais magro, além da média das alturas e dos pesos dos clientes

const prompt = require('prompt-sync')()

console.log('CENSO - ACADEMIA')

// Variáveis
let codigos = []
let alturas = []
let pesos = []
let maiorAltura = -1
let menorAltura = 99999
let maisGordo = -1
let maisMagro = 99999 
let mediaAltura = 0
let mediaPeso = 0

// Loop para coleta de dados
while (true) {
    let codigo = Number(prompt('Informe o código de usuário (ou 0 para encerrar): '))
    if (codigo === 0) {
        console.log('Programa encerrado.')
        break;
    }
    let altura = parseFloat(prompt('Informe a altura do usuário (em cm): '))
    let peso = parseFloat(prompt('Informe o peso do usuário (em kg): '))

    // Validação e atualização dos valores máximos e mínimos
    if (altura > maiorAltura) {
        maiorAltura = altura
    }
    if (altura < menorAltura) {
        menorAltura = altura
    }
    if (peso > maisGordo) {
        maisGordo = peso
    }
    if (peso < maisMagro) {
        maisMagro = peso
    }

    // Adicionar às arrays
    codigos.push(codigo)
    alturas.push(altura)
    pesos.push(peso)
}

// Calcular médias
let somaAltura = 0
let somaPeso = 0

for (let i = 0; i < alturas.length; i++) {
    somaAltura += alturas[i]
    somaPeso += pesos[i]
}

mediaAltura = somaAltura / alturas.length
mediaPeso = somaPeso / pesos.length

// Impressão dos resultados
console.log(`Cliente com maior altura: ${maiorAltura.toFixed(2)} cm`)
console.log(`Cliente com menor altura: ${menorAltura.toFixed(2)} cm`)
console.log(`Cliente mais gordo: ${maisGordo.toFixed(2)} kg`)
console.log(`Cliente mais magro: ${maisMagro.toFixed(2)} kg`)
console.log(`Média de altura: ${mediaAltura.toFixed(2)} cm`)
console.log(`Média de peso: ${mediaPeso.toFixed(2)} kg`)