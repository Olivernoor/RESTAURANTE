import Model from "../../model/index.js";

const createCliente = async (cliente) =>{
  try {
    const create = await Model.Cliente.create({
    name: cliente.name,
    number: cliente.number
   })
   if (!create) {
    return false;
   }
  } catch (error) {
    return false
  }
}

export default createCliente