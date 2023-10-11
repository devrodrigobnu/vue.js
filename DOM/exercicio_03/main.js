// 3) Calculadora de IMC
// Crie uma calculadora de Índice de Massa Corporal (IMC) 
// em uma página web. O usuário deve inserir seu peso e altura, 
// e ao clicar em um botão, o resultado do cálculo do IMC deve ser exibido.

function calcularIMC() {
    // Obtém os valores de peso e altura do input do usuário
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    let imc 
    // Condição para calcular os resultado de IMC, usando somente número
    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        imc = peso / (altura * altura);
        const resultado = `Seu IMC é: ${imc.toFixed(2)}`

        document.getElementById("resultado").textContent = resultado;
    } else {
        document.getElementById("resultado").textContent = "Insira valores válidos."
    }

    let categoria = ''

    // Com base no resultado do IMC, CRIEI um condicional para 
    // exibir uma mensagem de acordo com o nível de obesidade
    if (imc < 18.5) {
        categoria = "MAGREZA"
    } else if (imc >= 18.5 && imc < 25.0) {
        categoria = "NORMAL"
    } else if (imc >= 25.0 && imc < 30.0) {
        categoria = "SOBREPESO"
    } else if (imc >= 30.0 && imc < 40.0) {
        categoria = "OBESIDADE"
    } else {
        categoria = "OBESIDADE GRAVE"
    }

    // Mostrar reultado
    document.getElementById("resultado").textContent = "Seu IMC é " + imc.toFixed(2) + ". Isso Indica: " + categoria
}
