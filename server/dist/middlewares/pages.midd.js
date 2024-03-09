"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePage = void 0;
const page_error_1 = require("../custom-error/page.error");
const express_validator_1 = require("express-validator");
const httpr_1 = require("../adapters/http/httpr");
function validatePage(req, res, next) {
    try {
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            throw new page_error_1.PagesError("Error en la validacion de datos", error);
        }
        next();
    }
    catch (err) {
        const error = err;
        console.log(error);
        if (error instanceof page_error_1.PagesError) {
            return (0, httpr_1.errorRes)(res, 400, {
                msg: error.validateError,
                succes: false,
                status: 400
            });
        }
    }
}
exports.validatePage = validatePage;
