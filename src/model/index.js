import sequelize from "../config/database.js";
import Cliente from "./cliente/cliente.js";
import Marmita from "./marmitas/Marmita.js";

Cliente.hasMany(Marmita,{
    foreignKey: {
        name: "clienteId",
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
    }
})

sequelize.sync({
    force: false,
    alter: true
}).then( ()=> {
    console.log ("Todas as tabelas foram sincronizadas com sucesso");
}

)

export default {
    Cliente
}