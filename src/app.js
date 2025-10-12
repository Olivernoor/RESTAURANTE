import express from 'express'
import routerCliente from './routers/cliente/cliente.js'


const app = express()

app.use(express.json())
app.use(routerCliente)

export default app