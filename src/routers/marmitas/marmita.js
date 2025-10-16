import express from "express"
import handleCreateMarmita from "../../controllers/marmita/marmitaController.js";

const routerMarmita= express.Router()

routerMarmita.post("/clientes/:id/marmitas", handleCreateMarmita);

export default routerMarmita
