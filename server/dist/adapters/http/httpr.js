"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorRes = exports.success = void 0;
const success = (res, status, body) => res.status(status).json(body);
exports.success = success;
function errorRes(res, status, body) {
    res.status(status).json(body);
}
exports.errorRes = errorRes;
