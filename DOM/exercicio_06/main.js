// Criar um sistema que permita
// o usuario calcular uma equaçao 
// de segundo grau.
// O site devera ter 3 inputs
// um para cada valor da equação
// a,b e c.
// -Primeiro calcular o delta
// -Depois, calcular o valor de x1 e x2

function calcularEquacao(){
    // Obter valores de a,b,c com o inputs
    const a = Number(document.getElementById("valorA").value)
    const b = Number(document.getElementById("valorB").value)
    const c = Number(document.getElementById("valorC").value)

    // Calcula o delta
    const delta = Math.pow(b,2) - 4 * a * c

    // Calcula x1 e x2
    let x1, x2
    if (delta > 0){
        x1 = (-b + Math.sqrt(delta)) / (2*a)
        x2 = (-b - Math.sqrt(delta)) / (2*a)
        document.getElementById("resultado").textContent = `x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`
    } else if (delta === 0) {
        x1 = -b / (2*a)
        document.getElementById("reultado").textContent = `x1 = x2 = ${x1.toFixed(2)}`
    } else {
        document.getElementById("resultado").textContent = "A equação não possui solução real.";
    }
}