import Marmita from "../../model/marmitas/Marmita.js";

const createByList = async (marmitas, clienteId) => {

    const response = {
        success: [],
        error: []
    }
    for (const marmita of marmitas){
        const marmitaCreate = await Marmita.create({
            name: marmita.name,
            price: marmita.price,
            clienteId

        })
          if (!marmitaCreate) {
            response.error.push(marmita)
            continue
        }

        response.success.push(marmita)
    }

    return response
}

export default createByList
    
