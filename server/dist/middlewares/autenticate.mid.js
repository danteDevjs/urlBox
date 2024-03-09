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
exports.authenticate = void 0;
const account_error_1 = require("../custom-error/account.error");
const bcryptjs_1 = require("../libs/bcryptjs");
const user_repo_1 = require("../repository/user.repo");
const httpr_1 = require("../adapters/http/httpr");
function authenticate(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, password } = req.query;
            const objRepoUser = new user_repo_1.UserRepo;
            const resData = yield objRepoUser.readUser(username);
            const dataUser = resData[0][0];
            console.log(dataUser.password);
            console.log(password);
            if (Object.keys(dataUser).length === 0) {
                throw new account_error_1.ErrorAccount("Usuario no existe en la base de datos", "ErrorAccountName");
            }
            const veifyPassword = yield (0, bcryptjs_1.compPassword)(password, dataUser.password);
            if (!veifyPassword) {
                throw new account_error_1.ErrorAccount("La contraseña es incorrecta", "ErrorAccountPassword");
            }
            next();
        }
        catch (err) {
            const error = err;
            if (error instanceof account_error_1.ErrorAccount && error.name === "ErrorAccountName") {
                (0, httpr_1.errorRes)(res, 404, {
                    msg: error.message,
                    succes: false
                });
            }
            if (error instanceof account_error_1.ErrorAccount && error.name === "ErrorAccountPassword") {
                (0, httpr_1.errorRes)(res, 400, {
                    msg: error.message,
                    succes: false
                });
            }
            (0, httpr_1.errorRes)(res, 500, {
                msg: "Error interno del servidor",
                succes: false
            });
        }
    });
}
exports.authenticate = authenticate;
