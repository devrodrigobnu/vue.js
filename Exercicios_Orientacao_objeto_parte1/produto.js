// Classe Produto:
// Crie uma classe chamada Produto para modelar informações sobre um produto.
// Crie um pequeno sistema de compra simples.
// Atributos: Nome, Preço, Quantidade em Estoque
// Métodos: atualizarEstoque e exibirDetalhes.



// Classe
class Produto {
    // Construtor
    constructor(nome,preco){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = 0
    }
    // Métodos
    atualizarEstoque(novaQuantidade){
        if(typeof novaQuantidade === 'number' && novaQuantidade >= 0){
            this.quantidade = novaQuantidade
        } else {
            alert(`Quantidade fornecida é inválidas`)
        }
    }
    exibirDetalhes(){
        return [this.nome, this.preco, this.quantidade]
    }
}

let produtos = []

let continuar = true

while(continuar){
    let menu = prompt('Escolha uma opção:\n1-Adicionar produto\n2-Atualizar Estoque\n3-Exibir Estoque\n4-Sair do sistema')

    // Caso 1: Adicionar produto
    switch(menu){
        case '1':
            let nomeProduto = prompt('Digite o nome do produto a atualizar: ')
            let precoProduto = Number(prompt('Digite o preco do produto a atualizar: '))
            let novoProduto = new Produto(nomeProduto,precoProduto)
            produtos.push(novoProduto)
            alert(`Produto, adicionado com sucesso.`)
            break;

        case '2':
            let nomeParaAtualizar = prompt('Digite o nome do produto para atualizar: ')
            let produtoParaAtualizar = produtos.find(produto => produto.nome === nomeParaAtualizar)
            if (produtoParaAtualizar) {
                let novoEstoque = Number(prompt('Digite o novo estoque: '));

                // Chamar o método atualizarEstoque da classe Produto
                produtoParaAtualizar.atualizarEstoque(novoEstoque);

                alert(`Estoque do produto ${produtoParaAtualizar.nome} atualizado para ${produtoParaAtualizar.quantidade}`);
            } else {
                alert('Produto não encontrado.');
            }
            break;

        // Caso 3: Exibir Estoque
        case '3':
            let todosProdutos = 'Lista de produtos:\n'
            for (let produto of produtos) {
                let detalhes = produto.exibirDetalhes()
                todosProdutos += `Nome: ${detalhes[0]}\nPreço: ${detalhes[1]}\nQuantidade em Estoque: ${detalhes[2]}`
            }
            alert(todosProdutos)
            break;

        // Caso 4: Sair do sistema
        case '4':
            continuar = false;
            alert(`Saindo...`)
            break;

        // Tratamento para opções inválidas
        default:
            alert('Opção inválida. Escolha novamente.');
    }
}




