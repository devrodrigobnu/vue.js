// Calcular o volume de:
//- Cubo

function Main() {

    let a = parseFloat(prompt('Digite o tamanho aresta do recipiente em metros: '))
    let v = Math.pow(a,3)

    console.log(`O volume é ${v}m³`)
}

Main()

