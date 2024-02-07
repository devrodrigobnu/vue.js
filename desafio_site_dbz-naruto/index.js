const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})

// Objeto para armazenar os votos e o total
let votacao = {
    dbz: 0,
    naruto: 0,
    total: 0,
}

// Função para calcular a porcentagem com inicialização correta
function calcularPorcentagem(votos, total) {
    // Calcula a porcentagem, garantindo que a porcentagem inicial seja 50% mesmo com 0 votos
    return total > 0 ? ((votos / total) * 100).toFixed(2) : 50.00
}

// Rota principal, retorna uma mensagem indicando que a API está funcionando
app.get('/', (req, res) => {
    return res.json({ mensagem: 'A API está funcionando' })
});

// Rota para obter a contagem de votos atual
app.get('/votacao', (req, res) => {
    return res.json(votacao)
});

// Rota para processar novos votos
app.post('/votar', (req, res) => {
    const { dbz, naruto } = req.body
    if (dbz) {
        votacao.dbz += dbz
    } else if (naruto) {
        votacao.naruto += naruto
    }

    // Atualiza o total após verificar os votos em ambos os animes
    votacao.total = votacao.dbz + votacao.naruto

    console.log(votacao)
    return res.json({ votacao })
});

// Rota para obter a porcentagem de votos para o anime "DBZ"
app.get('/porcentagemdbz', (req, res) => {
    // Calcula a porcentagem de votos para DBZ
    let dbzporcentagem = calcularPorcentagem(votacao.dbz, votacao.total);
    return res.json(dbzporcentagem)
});

// Rota para obter a porcentagem de votos para o anime "Naruto"
app.get('/porcentagemnaruto', (req, res) => {
    // Calcula a porcentagem de votos para Naruto
    let narutoporcentagem = calcularPorcentagem(votacao.naruto, votacao.total);
    return res.json(narutoporcentagem)
});

// Rota para reiniciar a contagem de votos
app.post('/reset', (req, res) => {
    votacao.dbz = 0;
    votacao.naruto = 0;
    votacao.total = 0;

    return res.json({ message: 'Contagem de votos reiniciada.' })
});
