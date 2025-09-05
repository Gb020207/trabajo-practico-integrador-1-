import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,

    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
})

export const initDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Se conecto a la base de datos");
        await sequelize.sync({});
        console.log("se sincronizo a la base de datos")
    } catch (error) {
        console.error(error);
        
    }
}

export default sequelize;