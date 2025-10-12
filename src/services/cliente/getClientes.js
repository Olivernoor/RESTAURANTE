import Cliente from "../../model/cliente/Cliente.js"

const getAll = async () =>{
    const clientes =  await Cliente.findAll()
    return clientes
}


export default getAll