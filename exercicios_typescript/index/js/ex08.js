"use strict";
// 8) Crie uma função chamada calcularTotal que aceite um array de objetos do tipo Produto e retorne o valor total da compra.
// Defina a função calcularTotal
function calcularTotal(produtos) {
    // Inicialize o valor total como zero
    let total = 0;
    // Itere sobre cada produto no array e adicione o valor ao total
    for (const produto of produtos) {
        total += produto.preco * produto.quantidade;
    }
    return total;
}
// Código rodando
const listaDeProdutos = [
    { nome: "ProdutoA", preco: 10, quantidade: 2 },
    { nome: "ProdutoB", preco: 15, quantidade: 1 },
    { nome: "ProdutoC", preco: 20, quantidade: 3 }
];
const valorTotalDaCompra = calcularTotal(listaDeProdutos);
console.log("Valor total da compra:", valorTotalDaCompra);
