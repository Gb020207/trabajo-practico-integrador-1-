import { body, param } from "express-validator";
import { Tag } from "../models/tag.models.js";
import { validator } from "./validator.js";

export const validateTag = [
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 2, max: 30 }).withMessage('El nombre debe tener entre 2 y 30 caracteres')
        .custom(async (value) => {
            const tag = await Tag.findOne({ where: { name: value } });
            if (tag) {
                throw new Error('El nombre ya existe');
            }
            return true;
        }),
    validator
];

export const validateTagId = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio')
        .isInt({ gt: 0 }).withMessage('El id debe ser un número entero positivo')
        .custom(async (value) => {
            const tag = await Tag.findByPk(value);
            if (!tag) {
                throw new Error('El tag no existe');
            }
            return true;
        }),
    validator
];
export const validateUpdateTag = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio')
        .isInt({ gt: 0 }).withMessage('El id debe ser un número entero positivo')
        .custom(async (value) => {
            const tag = await Tag.findByPk(value);
            if (!tag) {
                throw new Error('El tag no existe');
            }
            return true;
        }),
    body('name')
        .optional()
        .isLength({ min: 2, max: 30 }).withMessage('El nombre debe tener entre 2 y 30 caracteres')
        .custom(async (value) => {
            const tag = await Tag.findOne({ where: { name: value } });
            if (tag) {
                throw new Error('El nombre ya existe');
            }   
            return true;
        }),
    validator
];

export const validatedeleteTag = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio')
        .isInt({ gt: 0 }).withMessage('El id debe ser un número entero positivo')
        .custom(async (value) => {
            const tag = await Tag.findByPk(value);
            if (!tag) {
                throw new Error('El tag no existe');
            }
            return true;
        }),
    validator
];
