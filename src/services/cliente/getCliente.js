import model from "../../model/index.js";

const getOne = async (id) => {
   try {
     const cliente = await model.Cliente.getOne({
        where: {
            id: id,
        },
    });
    if (!cliente){
        return false;
    }
    return cliente;
   } catch (error) {
    throw new Error(error.message);
    
   }
} 

export default getOne