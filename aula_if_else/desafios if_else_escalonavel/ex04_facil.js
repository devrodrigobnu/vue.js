// Verifique se um número é divisível por 3 e 5.


function Main(num) {
    if (num%3==0 || num%5==0){
        console.log(`O ${num} é divisível por 3 ou por 5.`)
    } else 
        console.log(`O ${num} não é divisível por 3 ou por 5.`)
}

let num = Number(prompt('Digite um número: '))
Main(num)