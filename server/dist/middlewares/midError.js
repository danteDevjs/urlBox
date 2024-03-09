"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = void 0;
function handleErrors(err, req, res, next) {
    console.log(err);
    res.status(500).json("error en el servidor");
}
exports.handleErrors = handleErrors;
