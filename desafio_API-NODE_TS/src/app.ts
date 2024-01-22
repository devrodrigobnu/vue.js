// Importa os módulos corrigidos
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './routes/index'

// Cria o app
export const app = express()

// Configuração dos middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Integra o endpoint
app.use('/', router)