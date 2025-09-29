import { body, param } from "express-validator";
import { ArticleTag } from "../../models/article_tag.models.js";
import { validator } from "./validator.js";
export const validateArticleTag = [
    body('article_id').isInt().withMessage('article_id debe ser un entero').bail()
    .custom(async (value) => {
        const articleTag = await ArticleTag.findOne({ where: { article_id: value } });
        if (articleTag) {
            throw new Error('El article_id ya existe');
        }
        return true;
    }),
    body('tag_id').isInt().withMessage('tag_id debe ser un entero').bail()
    .custom(async (value) => {
        const articleTag = await ArticleTag.findOne({ where: { tag_id: value } });
        if (articleTag) {
            throw new Error('El tag_id ya existe');
        }
        return true;
    }),
    validator
];
export const validateArticleTagId = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio')
        .isInt({ gt: 0 }).withMessage('El id debe ser un número entero positivo')
        .custom(async (value) => {
            const articleTag = await ArticleTag.findByPk(value);
            if (!articleTag) {
                throw new Error('El article_tag no existe');
            }
            return true;
        }),
    validator
];
export const validateUpdateArticleTag = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio') 
        .isInt({ gt: 0 }).withMessage('El id debe ser un número entero positivo')
        .custom(async (value) => {
            const articleTag = await ArticleTag.findByPk(value);
            if (!articleTag) {
                throw new Error('El article_tag no existe');
            }
            return true;
        }),
    body('article_id').optional().isInt().withMessage('article_id debe ser un entero').bail()
    .custom(async (value) => {
        const articleTag = await ArticleTag.findOne({ where: { article_id: value } });
        if (articleTag) {
            throw new Error('El article_id ya existe');
        }
        return true;
    }),
    body('tag_id').optional().isInt().withMessage('tag_id debe ser un entero').bail()
    .custom(async (value) => {
        const articleTag = await ArticleTag.findOne({ where: { tag_id: value } });
        if (articleTag) {
            throw new Error('El tag_id ya existe');
        }
        return true;
    }),
    validator
];
export const validatedeleteArticleTag = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio')
        .isInt({ gt: 0 }).withMessage('El id debe ser un número entero positivo')
        .custom(async (value) => {
            const articleTag = await ArticleTag.findByPk(value);
            if (!articleTag) {
                throw new Error('El article_tag no existe');
            }
            return true;
        }),
    validator
];
