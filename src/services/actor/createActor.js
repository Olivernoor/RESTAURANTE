import Model from "../../model/index.js"

const createActorp = async (actor) =>{
  try {
    const create = await Model.Actor.create({
    name: actor.name,
    uf: actor.uf,
    city: actor.city
   })
   if (!create) {
    return false;
   }
  } catch (error) {
    return false
  }
}

export default createActorp