import { DataTypes } from "sequelize";
import sequelize from "../config/database";

export const Profile = sequelize.define('profile', {
    user_id : { type: DataTypes.INTEGER, allowNull: false, unique: true, references: { model: 'Users', key: 'id' } },
 first_name:  {type: DataTypes.VARCHAR(50), allowNull: false},
 last_name: {type: VARCHAR(50) , allowNull: false},
 biography : {type: DataTypes.TEXT, opcional},
 avatar_url : {type: DataTypes.VARCHAR(255), opcional},
 birth_date : {type: DataTypes.DATE, opcional}

})