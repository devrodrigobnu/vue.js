"use strict";
// 6) Crie uma função chamada atualizarAnoVeiculos que aceite um objeto do tipo Veiculo 
// e um ano como parâmetro. A função deve retornar um novo veículo com o ano atualizado para o ano fornecido.
// Define a função atualizarAnoVeiculos
function atualizarAnoVeiculos(veiculo, novoAno) {
    // Cria um novo objeto veículo com o ano atualizado
    const veiculoAtualizado = Object.assign(Object.assign({}, veiculo), { ano: novoAno // Atualiza a propriedade ano com o novo valor
     });
    return veiculoAtualizado;
}
// Rodando código
const meuVeiculo = {
    modelo: "Carro",
    ano: 2010
};
const anoAtualizado = 2022;
const veiculoAtualizado = atualizarAnoVeiculos(meuVeiculo, anoAtualizado);
console.log("Veículo original:", meuVeiculo);
console.log("Veículo atualizado:", veiculoAtualizado);
