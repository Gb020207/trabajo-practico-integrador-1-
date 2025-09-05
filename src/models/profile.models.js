import { DataTypes, STRING } from "sequelize";
import sequelize from "../config/database.js";
import { User } from "./user.models.js";

export const Profile = sequelize.define('profile', {
    user_id : { type: DataTypes.INTEGER, allowNull: false, unique: true, references: { model: 'Users', key: 'id' } },
 first_name:  {type: DataTypes.STRING(50), allowNull: false},
 last_name: {type: STRING(50) , allowNull: false},
 biography : {type: DataTypes.TEXT, },
 avatar_url : {type: DataTypes.STRING(255),},
 birth_date : {type: DataTypes.DATE, }

})

User.hasOne(Profile, {foreignKey: 'userId', as: 'Profile'})
Profile.belongsTo(User, {foreignKey: 'userId', as: 'User'})
