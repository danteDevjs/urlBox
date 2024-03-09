"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesError = exports.VoidData = void 0;
class VoidData extends Error {
    constructor(message) {
        super(message);
    }
}
exports.VoidData = VoidData;
class PagesError extends Error {
    constructor(message, validateError) {
        super(message);
        this.validateError = validateError;
    }
}
exports.PagesError = PagesError;
