import Model from "../../model/index.js"
const getAll = async () =>{
    const clientes =  await Model.Cliente.findAll()
    return clientes
}


export default getAll