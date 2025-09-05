import { ArticleTag } from "../models/article_tag.models.js";

export const createArticleTag = async (req, res) => {
    try {
        const { article_id, tag_id } = req.body;
        const newArticleTag = await ArticleTag.create({ article_id, tag_id });
        res.status(201).json(newArticleTag);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el Article-tag' });
    }
    
}
export const deleteArticleTag = async (req, res) => {
    const { id } =  req.params;
    try {
        const deletedCount = await ArticleTag.destroy({ where: { id } });
        if (deletedCount === 0) {
            return res.status(404).json({ error: 'Article-Tag no existente' });
        }
        res.status(204).send();

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al borrar el Article-Tag' });
    }
}