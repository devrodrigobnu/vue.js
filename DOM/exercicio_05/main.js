// 5) Contador de caracteres
// Crie um site que permita o usuario entrar 
// com uma frase, e através de um botão escrever 
// em um h2 quantos caracteres esta frase tem.


function contadorCaracter(){
    // Obtém o valor da frase 
    const frase = document.getElementById("frase").value

    // Calcula o número de caracteres
    const numeroCaracteres = frase.length

    // Exibe o número de caracteres no elemento h2
    document.getElementById("resultado").textContent = `Número de caracteres: ${numeroCaracteres}`
}