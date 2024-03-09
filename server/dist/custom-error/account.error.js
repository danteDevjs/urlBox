"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorAccount = void 0;
class ErrorAccount extends Error {
    constructor(message, name) {
        super(message);
        this.name = name;
    }
}
exports.ErrorAccount = ErrorAccount;
