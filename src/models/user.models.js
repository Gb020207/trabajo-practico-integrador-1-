import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import { Article } from "./article.models.js";
export const User = sequelize.define('User', {
    username:{type: DataTypes.STRING, allowNull: false, unique: true},
    email:{type: DataTypes.STRING(100), allowNull: false, unique: true},
    password:{type: DataTypes.STRING(100), allowNull: false},
    role:{type: DataTypes.ENUM('admin', 'user'), defaultValue: 'user'},
    deletedAt: { type: DataTypes.DATE, allowNull: true }
},
{
    paranoid: true,
})


Article.belongsTo(User, {foreignKey: 'user_Id', as: 'User'})
User.hasMany(Article, {foreignKey: 'user_Id', as: 'Articles'})
