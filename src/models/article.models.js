import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


export const Article = sequelize.define('Article', {
    title: { type : DataTypes.STRING(150), allowNull: false },
    content: {type: DataTypes.TEXT, allowNull: false},
    excerpt: {type: DataTypes.STRING(255), allowNull: true},
    status: { type: DataTypes.ENUM('published', 'archived'), defaultValue: 'published' },
   
})


