"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserError = void 0;
class UserError extends Error {
    constructor(message, name) {
        super(message);
        this.name = name;
    }
}
exports.UserError = UserError;
