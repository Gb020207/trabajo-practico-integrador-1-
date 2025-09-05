import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { Article } from "./article.models.js";
import { Tag } from "./tag.models.js";

export const ArticleTag = sequelize.define('articletag', {
    article_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Articles', key: 'id' } },
    tag_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Tags', key: 'id' } }
})



Article.belongsToMany(Tag, {through: ArticleTag, foreignKey: 'articleId',as: 'Tag' })
Tag.belongsToMany(Article, {through: ArticleTag, foreignKey: 'tagId', as: 'Article' })

ArticleTag.belongsTo(Article, { foreignKey: 'articleId', as: 'Article' })
ArticleTag.belongsTo(Tag, { foreignKey: 'tagId', as: 'Tag' })

