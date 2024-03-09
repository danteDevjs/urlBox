"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const page_error_1 = require("../custom-error/page.error");
const express_validator_1 = require("express-validator");
const httpr_1 = require("../adapters/http/httpr");
function validateUser(req, res, next) {
    try {
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            throw new page_error_1.PagesError("Error en la validacion de datos", error);
        }
        next();
    }
    catch (err) {
        const error = err;
        if (error instanceof page_error_1.PagesError) {
            return (0, httpr_1.errorRes)(res, 400, {
                msg: error.validateError,
                succes: false
            });
        }
    }
}
exports.validateUser = validateUser;
