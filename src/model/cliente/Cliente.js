import {DataTypes} from "@sequelize/core";
import sequelize from "../../config/database.js";

const Cliente = sequelize.define('cliente', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false
    }
  
})
export default Cliente