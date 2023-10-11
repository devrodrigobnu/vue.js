// Criar um formulario de cadastro de um produto com o botão
// que apos clicado reescreva os itens dos inputs embaixo

function cadastrarProduto() {
    // Obter os valore (variáveis)
    const nome = document.getElementById("nome").value
    const preco = document.getElementById("preco").value
    const descricao = document.getElementById("descricao").value

    // Criar elemento de lista com os dados do produto
    const produtoItem = document.createElement("li")
    produtoItem.textContent = `Nome: ${nome}, Preço: R$ ${preco}, Descrição: ${descricao}`

    // Adicionar o elemento à lista de produto cadastrados
    const listaProdutos = document.getElementById("produtosCadastrados")
    listaProdutos.appendChild(produtoItem)

    // Limpar campos de entrada após o cadastro
    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("descricao").value = "";
}