// Classifique duas idades como "jovem" (menos de 30 anos) ou "não jovem" (65 anos ou mais).

function Main(idade) {
    if (idade < 30) {
        console.log('Você é jovem')
    } else if (idade >= 65) {
        console.log('Você não é jovem')
    } else 
        console.log('Você está na meia idade')
        
}

let idade = Number(prompt('Digite sua idade:'))
Main(idade)