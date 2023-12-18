const express = require('express')
const server = express()
const filmes = require('./src/data/filmes.json')

server.get('/', (req, res) => {
    return res.json({ mensagem: 'A API ESTÁ FUNCIONANDO!' })
})

server.get('/usuario', (req, res) => {
    return res.json({ usuario: 'Cedrico Cedro-Ceco' })
})

server.get('/filmes', (req, res) => {
    return res.json({filmes})
})

server.listen(3000, () => {
    console.log('O servidor está funcionando')
})







