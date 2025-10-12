import Cliente from "../../model/cliente/cliente.js";

const destroyCliente = async (id) =>{
const cliente = await Cliente.destroy({
    where: {
        id
    }
})
if (!cliente){
    return false
}
return cliente
}
export default destroyCliente