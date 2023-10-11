// Função para calcular áre de um retângulo
// 2 variáveis + armazena e cálcula o resultado em uma variável "area" e "resultado"

function calcularArea(){
    const comprimento = Number(document.getElementById("altura").value)
    const largura = Number(document.getElementById("base").value)
    let area = comprimento * largura
    document.getElementById("resultado").innerHTML = "Área do retângulo: " + area + 'm²'

}

// Função para calcular a area de um círculo
function calcularAreaCirculo(){
    const raio = Number(document.getElementById("raio").value)
    const pi = 3.141592653589793 
    let area = pi * raio * raio
    document.getElementById("resultadoCirculo").innerHTML = "Área do círculo é: " + area
}