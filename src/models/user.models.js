import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define('User', {
    username:{type: DataTypes.STRING, allowNull: false, unique: true},
    email:{type: DataTypes.VARCHAR(100), allowNull: false, unique: true},
    password:{type: DataTypes.VARCHAR(100), allowNull: false},
    role:{type: DataTypes.ENUM('admin', 'user'), defaultValue: 'user'},
    deletedAt: { type: DataTypes.DATE, allowNull: true }
})

User.addHook('beforeCreate', (user) => {
    user.username = user.username.toLowerCase();
    user.email = user.email.toLowerCase();
});