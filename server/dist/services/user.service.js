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
exports.UserServices = void 0;
const bcryptjs_1 = require("../libs/bcryptjs");
const user_repo_1 = require("../repository/user.repo");
const user_error_1 = require("../custom-error/user.error");
class UserServices {
    constructor() {
        this.objRepo = new user_repo_1.UserRepo;
    }
    readUser() {
        return __awaiter(this, void 0, void 0, function* () {
            let resQuery = yield this.objRepo.readUsers();
            let dataQuery = resQuery;
            if (dataQuery.length === 0)
                throw new user_error_1.UserError("no hay datos de usuarios", "EmptyUsers");
            return dataQuery[0];
        });
    }
    readUserOne(username) {
        return __awaiter(this, void 0, void 0, function* () {
            let resQuery = yield this.objRepo.readUser(username);
            let dataQuery = resQuery[0][0];
            if (Object.keys(dataQuery).length === 0)
                throw new user_error_1.UserError("sin datos de usuario", "EmptyUser");
            return dataQuery;
        });
    }
    createUser(dataUser) {
        return __awaiter(this, void 0, void 0, function* () {
            //crear arreglo y hashear password
            const values = Object.values(dataUser);
            const [, password] = values;
            values[1] = yield (0, bcryptjs_1.hashPassword)(password);
            let resQuery = yield this.objRepo.createUser(values);
            let formasraras = resQuery[0];
            if (formasraras.affectedRows === 0)
                throw new user_error_1.UserError("no se ha guardado los datos", "NotRow");
            return 0;
        });
    }
    deleteUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let resQuery = yield this.objRepo.deleteUser(idUser);
            let validateDe = resQuery[0];
            if (validateDe.affectedRows === 0)
                throw new user_error_1.UserError("no se ha borrado la fila", "NotDelete");
            return 0;
        });
    }
    deleteLogicUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let resQuery = yield this.objRepo.deleteLogicUser(idUser);
            let validateDe = resQuery[0];
            if (validateDe.affectedRows === 0)
                throw new user_error_1.UserError("no se ha borrado la fila", "NotDelete");
            return 0;
        });
    }
    updateUser(dataUser, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            //crear arreglo y hashear password
            const values = Object.values(dataUser);
            const [, password] = values;
            values[1] = yield (0, bcryptjs_1.hashPassword)(password);
            values.push(idUser);
            let resQuery = yield this.objRepo.updateUser(values);
            let formasraras = resQuery[0];
            if (formasraras.affectedRows === 0)
                throw new user_error_1.UserError("no se ha actualizado los datos, preocure enviar nombre de usuario", "NotUpdate");
            return 0;
        });
    }
}
exports.UserServices = UserServices;
