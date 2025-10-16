import express from 'express'
import routerCliente from './routers/cliente/cliente.js'
import routerMarmita from './routers/marmitas/marmita.js'


const app = express()

app.use(express.json())
app.use(routerCliente)
app.use(routerMarmita)

export default app