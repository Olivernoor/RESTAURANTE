import express from "express"
import clienteController from '../../controllers/cliente/clienteController.js'

const routerCliente = express.Router()

routerCliente.post("/cliente", clienteController.handleCreateCliente)
routerCliente.get("/cliente/:id", clienteController.getCliente)
routerCliente.get("/cliente", clienteController.getClientes)
routerCliente.delete("/cliente/:id", clienteController.handleDestroyCliente)
routerCliente.patch("/cliente/:id", clienteController.updateCliente)

export default routerCliente