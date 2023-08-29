// Verifique se um número está dentro de um intervalo específico de 1 a 10.

function Main(num){
   if (num > 0 && num <= 10) {
    console.log(`O número ${num} está no intervalo de 1 a 10`)
    } else 
        console.log(`O número ${num} não está no intervalo de 1 a 10`)
}

let num = Number(prompt('Digite um número: '))
Main(num)