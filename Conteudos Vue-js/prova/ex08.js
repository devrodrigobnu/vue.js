// 8. Escreva um programa que peça ao usuário para adivinhar uma palavra secreta. 
// Se o palpite estiver incorreto, dê ao usuário um número limitado de tentativas 
// e informe quantas tentativas restam.

const req = require('prompt-sync')
const prompt = req()

const palavraSecreta = 'javascript'
const tentativasMaximas = 5

let tentativas = 0

console.log('Bem vindo ao jogo de adivinhar palavras secretas!')
console.log('Você terá 5 tentativas para adivinhar!')
console.log('Dica da palavra: Estudamos todo santo dia!')

while (tentativas < tentativasMaximas){
    let palpite = prompt('Valendo 1 milhão de reais, qual é a palavra certa: ')

    if (palpite === palavraSecreta){
        console.log('Você ganhou 1 milhão de reais em barra de ouro, que valem mais do que dinheiro!')
        break
    } else {
        tentativas++
        const tentativasRestantes = tentativasMaximas - tentativas
        if (tentativasRestantes > 0){
            console.log(`Palavra incorreta, você tem mais ${tentativasRestantes} tentativas.`)
        } else {
            console.log(`Você não tem mais tentativas. A palavra secreta era ${palavraSecreta}`)
            break
        }
    }
}
