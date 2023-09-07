// Calcular o volume de:
// Pirâmide


function Main() {
    let a = parseFloat(prompt('Digite a área da base: '))
    let h = Math.pow(a,2)
    let v = (a*h)/3
    console.log(`O volume da pirâmide é: ${v}`)
}

Main()