//  Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar.
//  O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
// 	par ou ímpar;
// 	positivo ou negativo;
// 	inteiro ou decimal.


function somar(a,b){
    return a+b
}

function subtrair(a,b){
    return a-b
}

function multiplicar(a,b){
    return a*b
}

function dividir(a,b){
    if (b != 0) {
        return a/b;
    } else {
        console.log('Não é possível dividir por zero.')
    }
}

function Menu() {
    window.alert('Escolha uma das operações:\n 1- Somar\n 2- Subtrair\n 3- Multiplicar\n 4- Dividir')


    const escolha = parseInt(prompt('Digite a operação desejada (1-4): '))

    let num1 = parseFloat(prompt('Digite o primeiro número: '))
    let num2 = parseFloat(prompt('Digite o segundo número: '))

    let resultado;

    switch(escolha) {
        case 1:
            resultado = somar(num1, num2)
            break
        case 2:
            resultado = subtrair(num1, num2)
            break
        case 3:
            resultado = multiplicar(num1, num2)
            break
        case 4:
            resultado = dividir(num1, num2)
            break
        default:
            resultado = 'Opção inválida'

        
    }
    console.log(`O Resultado da operação é: ${resultado}\n${resultado % 2 === 0 ? 'par' : 'ímpar'}`);
    console.log(`${resultado > 0 ? 'positivo' : 'negativo'}`)
    console.log(`${Number.isInteger(resultado) ? 'é um inteiro' : 'é um decimal'}`)

    
}   
Menu()