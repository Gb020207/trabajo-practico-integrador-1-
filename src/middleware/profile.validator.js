import { body, param } from "express-validator";
import { Profile } from "../models/profile.models";

import { validator } from "./validator.js";

export const validateProfile = [
    body('user_id').isInt().withMessage('user_id debe ser un entero').bail()
    .custom(async (value) => {
        const profile = await Profile.findOne({ where: { user_id: value } });
        if (profile) {
            throw new Error('El user_id ya existe');
        }   
        return true;
    }),
    body('bio').optional().isLength({ max: 255 }).withMessage('La bio debe tener como máximo 255 caracteres'),
    body('avatar_url').optional().isURL().withMessage('La URL del avatar no es válida'),
    validator
];

export const validateProfileId = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio')
        .isInt({ gt: 0 }).withMessage('El id debe ser un número entero positivo')
        .custom(async (value) => {
            const profile = await Profile.findByPk(value);
            if (!profile) {
                throw new Error('El perfil no existe');
            }
            return true;
        }),
    validator
];
export const validateUpdateProfile = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio')
        .isInt({ gt: 0 }).withMessage('El id debe ser un número entero positivo')
        .custom(async (value) => {
            const profile = await Profile.findByPk(value);
            if (!profile) {
                throw new Error('El perfil no existe');
            }
            return true;
        }),
    body('user_id').optional().isInt().withMessage('user_id debe ser un entero').bail()
    .custom(async (value) => {
        const profile = await Profile.findOne({ where: { user_id: value } });
        if (profile) {
            throw new Error('El user_id ya existe');
        }
        return true;
    }),
    body('bio').optional().isLength({ max: 255 }).withMessage('La bio debe tener como máximo 255 caracteres'),
    body('avatar_url').optional().isURL().withMessage('La URL del avatar no es válida'),
    validator
];  
export const validatedeleteProfile = [
    param('id')
        .notEmpty().withMessage('El id es obligatorio')
        .isInt({ gt: 0 }).withMessage('El id debe ser un número entero positivo')
        .custom(async (value) => {
            const profile = await Profile.findByPk(value);
            if (!profile) {
                throw new Error('El perfil no existe');
            }
            return true;
        }),
    validator
];
