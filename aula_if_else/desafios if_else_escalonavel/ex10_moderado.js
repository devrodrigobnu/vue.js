// Decida se uma pessoa pode se aposentar (idade igual ou superior a 65 anos) ou não.

function Main(idade) {
    if (idade >= 65) {
        console.log(`Você tem ${idade} anos, portanto pode se aposentar!`)
    } else 
        console.log(`Você tem ${idade} anos, portanto não pode se aposentar ainda!`)
}

let idade = parseInt(prompt('Digite sua idade: '))

Main(idade)