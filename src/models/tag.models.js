import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const Tag = sequelize.define('tag', {
    name: { type: DataTypes.VARCHAR(30), allowNull: false, unique: true }
})

