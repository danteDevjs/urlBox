"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = exports.validatePages = void 0;
const express_validator_1 = require("express-validator");
exports.validatePages = [
    (0, express_validator_1.body)("namePage")
        .toLowerCase()
        .trim()
        .isString()
        .notEmpty().withMessage("NamePage no debe venir vacio")
        .isLength({ min: 2, max: 50 }).withMessage("el minimo de caracteres es de 2 y el maximo de 50"),
    (0, express_validator_1.body)("descriptionPage")
        .toLowerCase()
        .trim()
        .isString()
        .notEmpty().withMessage("descriptionPage no debe venir vacio")
        .isLength({ min: 20, max: 130 }).withMessage("el minimo de caracteres es de 20 y el maximo de 2000"),
    (0, express_validator_1.body)("linkPage")
        .notEmpty().withMessage("la url no debe venir vacia")
        .isURL().withMessage("la url no posee el formato correcto"),
    (0, express_validator_1.body)("category")
        .trim()
        .isString()
        .notEmpty().withMessage("category no debe venir vacio")
        .toLowerCase()
];
exports.validateParams = [
    (0, express_validator_1.param)("idPage")
        .notEmpty().withMessage("Error, debe venir el parametro idPage"),
    (0, express_validator_1.param)("idUser")
        .notEmpty().withMessage("Error, debe venir el parametro idUser")
];
