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
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const httpr_1 = require("../adapters/http/httpr");
const user_error_1 = require("../custom-error/user.error");
class UserController {
    static listUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataUser = yield UserController.objUserService.readUser();
                (0, httpr_1.success)(res, 200, {
                    msg: "Data de usuario",
                    success: true,
                    data: dataUser
                });
            }
            catch (err) {
                let error = err;
                console.log(error);
                if (error instanceof user_error_1.UserError && error.name === "EmptyUsers") {
                    return (0, httpr_1.errorRes)(res, 404, {
                        msg: error.message,
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
    static listUserOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username } = req.data;
                const dataUser = yield UserController.objUserService.readUserOne(username);
                return (0, httpr_1.success)(res, 200, {
                    msg: "Data de usuario",
                    success: true,
                    data: dataUser
                });
            }
            catch (err) {
                let error = err;
                console.log(error);
                if (error instanceof user_error_1.UserError && error.name === "EmptyUser") {
                    return (0, httpr_1.errorRes)(res, 404, {
                        msg: error.message,
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
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserController.objUserService.createUser(req.body);
                return (0, httpr_1.success)(res, 201, {
                    msg: "El usuario se ha creado correctamente",
                    success: true,
                    data: null
                });
            }
            catch (err) {
                console.log(err);
                let error = err;
                if (error instanceof user_error_1.UserError && error.name === "NotRow") {
                    return (0, httpr_1.errorRes)(res, 400, {
                        msg: error.message,
                        succes: false
                    });
                }
                if (error.message.slice(0, 15) === "Duplicate entry") {
                    return (0, httpr_1.errorRes)(res, 409, {
                        msg: "Usuario ya existe en base de datos",
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
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserController.objUserService.deleteUser(req.params.idUser);
                return (0, httpr_1.success)(res, 204);
            }
            catch (err) {
                let error = err;
                console.log(error);
                if (error instanceof user_error_1.UserError && error.name === "NotDelete") {
                    return (0, httpr_1.errorRes)(res, 500, {
                        msg: error.message,
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
    static deleteLogicUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserController.objUserService.deleteLogicUser(req.params.idUser);
                return (0, httpr_1.success)(res, 204);
            }
            catch (err) {
                let error = err;
                console.log(error);
                if (error instanceof user_error_1.UserError && error.name === "NotDelete") {
                    return (0, httpr_1.errorRes)(res, 500, {
                        msg: error.message,
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
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserController.objUserService.updateUser(req.body, req.params.idUser);
                return (0, httpr_1.success)(res, 200, {
                    msg: "El usuario se ha actualizado correctamente",
                    success: true,
                    data: null
                });
            }
            catch (err) {
                let error = err;
                console.log(error);
                if (error instanceof user_error_1.UserError && error.name === "NotUpdate") {
                    return (0, httpr_1.errorRes)(res, 500, {
                        msg: error.message,
                        succes: false
                    });
                }
                if (error.message.slice(0, 15) === "Duplicate entry") {
                    return (0, httpr_1.errorRes)(res, 409, {
                        msg: "Usuario ya existe en base de datos",
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
}
exports.UserController = UserController;
UserController.objUserService = new user_service_1.UserServices;
