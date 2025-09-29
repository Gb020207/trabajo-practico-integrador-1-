import { body, param } from "express-validator";
import { User } from "../../models/user.models.js";
import { validator } from "./validator.js";

export const validateCreateUser = [
    body('username')
    .notEmpty().withMessage('El nombre de usuario es obligatorio')
    .isLength({min: 3}).withMessage('El nombre de usuario debe tener al menos 3 caracteres')
    .custom(async (value) => {
        const user = await User.findOne({where: {username: value}});
        if(user) {
            throw new Error('El nombre de usuario ya existe');
        }
        return true;
    }),
    body('email')
    .notEmpty().withMessage('El email es obligatorio')
    .isEmail().withMessage('El email no es valido')
    .custom(async (value) => {
        const user = await User.findOne({where: {email: value}});
        if(user) {
            throw new Error('El email ya existe');
        }
        return true;
    }),
    body('password')
    .notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('role')
    .optional()
    .isIn(['admin', 'user']).withMessage('El rol debe ser admin o user'),
    validator
];
export const validateUserId = [
    param('id')
    .notEmpty().withMessage('El id es obligatorio')
    .isInt({gt: 0}).withMessage('El id debe ser un número entero positivo')
    .custom(async (value) => {
        const user = await User.findByPk(value);
        if(!user) {
            throw new Error('El usuario no existe');
        }
        return true;
    }),
    validator
];
export const validateUpdateUser = [
    param('id')
    .notEmpty().withMessage('El id es obligatorio')
    .isInt({gt: 0}).withMessage('El id debe ser un número entero positivo')
    .custom(async (value) => {
        const user = await User.findByPk(value);
        if(!user) {
            throw new Error('El usuario no existe');
        }
        return true;
    }),
    body('username')
    .optional()
    .isLength({min: 3}).withMessage('El nombre de usuario debe tener al menos 3 caracteres')
    .custom(async (value, {req}) => {
        const user = await User.findOne({where: {username: value}});
        if(user && user.id !== parseInt(req.params.id)) {
            throw new Error('El nombre de usuario ya existe');
        }
        return true;
    }),
    body('email')
    .optional()
    .isEmail().withMessage('El email no es valido')
    .custom(async (value, {req}) => {
        const user = await User.findOne({where: {email: value}});
        if(user && user.id !== parseInt(req.params.id)) {
            throw new Error('El email ya existe');
        }
        return true;
    }),
    body('password')
    .optional()
    .isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('role')
    .optional()
    .isIn(['admin', 'user']).withMessage('El rol debe ser admin o user'),
    validator
];
export const validateDeleteUser = [
    param('id')
    .notEmpty().withMessage('El id es obligatorio')
    .isInt({gt: 0}).withMessage('El id debe ser un número entero positivo')
    .custom(async (value) => {
        const user = await User.findByPk(value);
        if(!user) {
            throw new Error('El usuario no existe');
        }
        return true;
    }),
    validator
];
