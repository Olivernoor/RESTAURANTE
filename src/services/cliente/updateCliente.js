import Cliente from "../../model/cliente/cliente.js";


const update = async (data, id) => {
    const qtd = await Cliente.update(data, {
       where: {
        id
       } 
    })

    if (qtd == 0) {
        return false
    }

    const cliente= await Cliente.findByPk(id)

    return cliente
}

export default update