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
exports.UrlRepo = void 0;
const mysql_1 = require("../databases/mysql");
class UrlRepo {
    constructor() {
        this.objSql = mysql_1.Mysql.SINGLETON();
    }
    read(fkUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `select id_page, name_page, description_page, link_page, category from pages WHERE pk_user = ? && availability = 1 ORDER BY id_page DESC;`;
            const res = yield this.objSql.mysqlQuerys(query, [fkUser]);
            return res;
        });
    }
    create(data, pkUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO pages (pk_user, name_page, description_page, link_page, category)
            VALUES(?,?,?,?,?)`;
            const resQuery = yield this.objSql.mysqlQuerys(query, [pkUser, ...data]);
            return resQuery;
        });
    }
    delete(idPage, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            //usar el codigo 204 para este y para update
            const query = `DELETE FROM pages WHERE id_page = ? && pk_user = ?`;
            const resQuery = yield this.objSql.mysqlQuerys(query, [idPage, idUser]);
            return resQuery;
        });
    }
    updatePage(data, idPage) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `UPDATE pages SET name_page = ?, description_page = ?, link_page = ?, category = ? WHERE id_page = ?`;
            const resQuery = yield this.objSql.mysqlQuerys(query, [...data, idPage]);
            return resQuery;
        });
    }
}
exports.UrlRepo = UrlRepo;
