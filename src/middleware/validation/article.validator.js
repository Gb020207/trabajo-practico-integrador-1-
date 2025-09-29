import { body, param } from "express-validator";
import { Article } from "../../models/article.models.js";
import { validator } from "./validator.js";
export const validateArticle = [
    body('title').notEmpty().withMessage('El título es obligatorio')
    .isLength({ min: 5 }).withMessage('El título debe tener al menos 5 caracteres'),
    body('content').notEmpty().withMessage('El contenido es obligatorio')
    .isLength({ min: 20 }).withMessage('El contenido debe tener al menos 20 caracteres'),
    body('userId').isInt().withMessage('userId debe ser un entero').bail()
    .custom(async (value) => {
        const article = await Article.findOne({ where: { userId: value } });
        if (article) {
            throw new Error('El userId ya existe');
        }
        return true;
    }),
    validator
];
export const validateArticleId = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio')
        .isInt({ gt: 0 }).withMessage('El id debe ser un número entero positivo')
        .custom(async (value) => {
            const article = await Article.findByPk(value);
            if (!article) {
                throw new Error('El artículo no existe');
            }
            return true;
        }),
    validator
];
export const validateUpdateArticle = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio')
        .isInt({ gt: 0 }).withMessage('El id debe ser un número entero positivo')
        .custom(async (value) => {
            const article = await Article.findByPk(value);
            if (!article) {
                throw new Error('El artículo no existe');
            }
            return true;
        }),
    body('title').optional().isLength({ min: 5 }).withMessage('El título debe tener al menos 5 caracteres'),
    body('content').optional().isLength({ min: 20 }).withMessage('El contenido debe tener al menos 20 caracteres'),
    body('userId').optional().isInt().withMessage('userId debe ser un entero').bail()
    .custom(async (value) => {
        const article = await Article.findOne({ where: { userId: value } });
        if (article) {
            throw new Error('El userId ya existe');
        }
        return true;
    }),
    validator
];
export const validatedeleteArticle = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio') 
        .isInt({ gt: 0 }).withMessage('El id debe ser un número entero positivo')
        .custom(async (value) => {
            const article = await Article.findByPk(value);
            if (!article) {
                throw new Error('El artículo no existe');
            }
            return true;
        }),
    validator
];
