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
exports.LogController = void 0;
const account_service_1 = require("../services/account.service");
const httpr_1 = require("../adapters/http/httpr");
class LogController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield LogController.objAccount.login(req.dataUser);
                res.cookie('bearerToken', token, {
                    httpOnly: false
                });
                (0, httpr_1.success)(res, 200, {
                    msg: "usuario autenticado",
                    success: true,
                    data: null
                });
            }
            catch (err) {
                const error = err;
                console.log(error);
                (0, httpr_1.errorRes)(res, 500, {
                    msg: "Error interno del servidor",
                    succes: false
                });
            }
        });
    }
    static logout() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.LogController = LogController;
LogController.objAccount = new account_service_1.Account;
