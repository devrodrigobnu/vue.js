import { Router } from 'express'

export const router = Router()

// Rota GET
router.get('/', (req, res) => res.send('API com Express e TypeScript'))

// Rota POST
router.post('/', (req, res) => {
    const dadosRecebidos = req.body;
    // Imprime os dados recebido
    console.log('Dados recebidos:', dadosRecebidos)

    // Resposta para o cliente
    const resposta = { message: 'Rota POST: Criado com sucesso!', data: dadosRecebidos }

    // Imprime a resposta no console
    console.log('Resposta:', resposta)

    // Envia a resposta para o cliente
    res.json(resposta)
})
