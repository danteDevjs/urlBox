"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userQuery = exports.userValidations = void 0;
const express_validator_1 = require("express-validator");
const user_repo_1 = require("../../repository/user.repo");
const objUserRepo = new user_repo_1.UserRepo;
exports.userValidations = [
    (0, express_validator_1.body)("username")
        .isString().withMessage("Debe ser una cadena de caracteres")
        .notEmpty().withMessage("EL username no debe venir vacio")
        .isLength({ min: 3 }).withMessage("EL username debe tener un minimo de 3 caracters"),
    (0, express_validator_1.body)("password")
        .isString().withMessage("Debe ser una cadena de caracteres")
        .notEmpty().withMessage("La password no debe venir vacio")
        .isLength({ min: 6 }).withMessage("La password debe tener un minimo de 6 caracteres"),
];
exports.userQuery = [
    (0, express_validator_1.query)("username")
        .isString().withMessage("Debe ser una cadena de caracteres")
        .notEmpty().withMessage("EL username no debe venir vacio"),
    (0, express_validator_1.query)("password")
        .isString().withMessage("Debe ser una cadena de caracteres")
        .notEmpty().withMessage("La password no debe venir vacio")
];
