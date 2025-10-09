import model from "../../model/index.js"

const getOne = async (id) => {
   try {
     const actor = await model.Actor.findOne({
        where: {
            id: id,
        },
    });
    if (!actor){
        return false;
    }
    return actor;
   } catch (error) {
    throw new Error(error.message);
    
   }
} 

export default getOne