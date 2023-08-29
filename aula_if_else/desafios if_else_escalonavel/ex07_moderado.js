// Classifique três números em ordem crescente.

function Main(num1, num2, num3){
    let lista = [num1, num2, num3]

    lista.sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
    console.log('A ordem crescente dos numeros é: ' + lista)
}


let num1 = parseFloat(prompt('Informe o primeiro número: '))
let num2 = parseFloat(prompt('Informe o segundo número: '))
let num3 = parseFloat(prompt('Informe o terceiro número: '))    

Main(num1, num2, num3)