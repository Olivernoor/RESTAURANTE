import sequelize from "../config/database.js";
import Cliente from "./cliente/cliente.js";

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