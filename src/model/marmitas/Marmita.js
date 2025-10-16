import { DataTypes } from "@sequelize/core";
import sequelize from "../../config/database.js";

const Marmita = sequelize.define('Marmitas', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

export default Marmita