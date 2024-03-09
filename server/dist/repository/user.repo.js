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
exports.UserRepo = void 0;
const mysql_1 = require("../databases/mysql");
class UserRepo {
    constructor() {
        this.objMysql = mysql_1.Mysql.SINGLETON();
    }
    readUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.objMysql.mysqlQuerys("select idUser, username, password, created, availability, typeUser FROM user");
        });
    }
    readUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.objMysql.mysqlQuerys("select  idUser, username, password, created, availability, typeUser FROM user WHERE username = ? && availability = 1", [idUser]);
        });
    }
    createUser(dataUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.objMysql.mysqlQuerys("INSERT INTO user(username, password) VALUES (?,?)", dataUser);
        });
    }
    deleteUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.objMysql.mysqlQuerys("DELETE FROM user WHERE idUser = ?", [idUser]);
        });
    }
    deleteLogicUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.objMysql.mysqlQuerys("UPDATE user SET availability = 0 WHERE username = ?", [idUser]);
        });
    }
    updateUser(dataUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.objMysql.mysqlQuerys("UPDATE user SET username = ?, password = ? WHERE username = ?", dataUser);
        });
    }
}
exports.UserRepo = UserRepo;
