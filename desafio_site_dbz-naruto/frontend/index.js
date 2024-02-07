// fetch é o comando para fazer uma requisição HTTP, dai vem o endereco e o then com o nome que vamos salvar o resultado
// fetch('http://localhost:3000/filme').then(dados => dados.json())

fetch('http://localhost:3000/votacao').then(votos => votos.json())

let votos = 0

// Função para obter a contagem atual da votação
async function obterVotacao() {
    try {
        const response = await fetch('http://localhost:3000/votacao')
        console.log(response)
        const data = await response.json()
        console.log('Contagem atual da votação:', data);
        votacaoAtual = data.total
        verificarVotos()

    } catch (error) {
        console.error('Erro ao obter a votação:', error);
    }

}

// Função para enviar um voto para a API
async function votar(anime) {
    try {
        const response = await fetch('http://localhost:3000/votar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ [anime]: 1 })
        });
        const data = await response.json()
        alert('Voto computado com sucesso!')
        votos += 1
        verificarVotos()
    } catch (error) {
        console.error('Erro ao votar:', error)
    }
}

async function resetar() {
    try {
        const response = await fetch('http://localhost:3000/reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json()
        console.log('Contagem de votos reiniciada:', data)

    } catch (error) {
        console.error('Erro ao reiniciar a votação:', error)
    }
}

// Função para verificar se existem votos computados e exibir o botão de resultado
function verificarVotos() {
    if (votos > 0) {
        document.getElementById('resultado').style.display = 'block'
    }
}

function abrirResultados() {
    window.location.href = "resultado.html";
}

function voltarVotar() {
    window.location.href = "votacao.html";
}
