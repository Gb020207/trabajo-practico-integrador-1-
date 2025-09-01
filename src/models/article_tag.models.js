import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const ArticleTag = sequelize.define('articletag', {
    article_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Articles', key: 'id' } },
    tag_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Tags', key: 'id' } }
})



