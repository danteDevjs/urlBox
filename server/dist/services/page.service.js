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
exports.UrlService = void 0;
const url_repo_1 = require("../repository/url.repo");
const page_error_1 = require("../custom-error/page.error");
class UrlService {
    constructor() {
        this.objRepo = new url_repo_1.UrlRepo;
    }
    read(fkUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.objRepo.read(fkUser);
            const data = res[0];
            if (data.length === 0) {
                throw new page_error_1.VoidData("No hay contenido");
            }
            return data;
        });
    }
    create(data, pkUser, idPage) {
        return __awaiter(this, void 0, void 0, function* () {
            const values = Object.values(data);
            console.log(idPage);
            if (idPage === 'null') {
                const resQuery = yield this.objRepo.create(values, pkUser);
                const pageData = resQuery[0];
                if (pageData.affectedRows === 0) {
                    throw new page_error_1.VoidData("no se ha creado el campo");
                }
                return true;
            }
            //update
            const resQuery = yield this.objRepo.updatePage(values, idPage);
            const pageData = resQuery[0];
            if (pageData.affectedRows === 0) {
                throw new page_error_1.VoidData("no se actualiza el campo");
            }
            return true;
        });
    }
    delete(idPage, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const resQuery = yield this.objRepo.delete(idPage, idUser);
            const pageData = resQuery[0];
            if (pageData.affectedRows === 0) {
                throw new page_error_1.VoidData("no se ha aliminado el campo");
            }
            return true;
        });
    }
}
exports.UrlService = UrlService;
