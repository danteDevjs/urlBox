"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = void 0;
const jwt_1 = require("../libs/jwt");
const httpr_1 = require("../adapters/http/httpr");
function authorization(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resToken = req.headers.authorization;
            if (!resToken) {
                throw new Error("el token no viene");
            }
            const token = resToken.split(" ").pop();
            const data = yield jwt_1.Jwt.decode(token);
            req.data = data;
            next();
        }
        catch (err) {
            const error = err;
            console.log(error);
            console.log("llego");
            if (error.message === "jwt expired") {
                return (0, httpr_1.errorRes)(res, 500, {
                    msg: "su sesion ha expirado",
                    succes: false
                });
            }
            if (error.message.trim() === "invalid signature") {
                return (0, httpr_1.errorRes)(res, 500, {
                    msg: "Token no valido!!!",
                    succes: false
                });
            }
            return (0, httpr_1.errorRes)(res, 500, {
                msg: "Error interno del servidor",
                succes: false
            });
        }
    });
}
exports.authorization = authorization;
