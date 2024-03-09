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
exports.Pages = void 0;
const mysql_1 = require("../databases/mysql");
const page_service_1 = require("../services/page.service");
const httpr_1 = require("../adapters/http/httpr");
const page_error_1 = require("../custom-error/page.error");
class Pages {
    static list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.data;
                const data = yield Pages.objUrl.read(id);
                res.setHeader("Content-Type", "application/json");
                return (0, httpr_1.success)(res, 200, {
                    msg: "datos de paginas",
                    success: true,
                    data: data,
                    status: 200
                });
            }
            catch (err) {
                const error = err;
                console.log(error);
                if (error instanceof page_error_1.VoidData) {
                    return (0, httpr_1.errorRes)(res, 404, {
                        msg: "no hay contenido",
                        succes: false,
                        status: 404
                    });
                }
                return (0, httpr_1.errorRes)(res, 500, {
                    msg: "Error interno del servidor",
                    succes: false,
                    status: 500
                });
            }
        });
    }
    static save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.data;
                yield Pages.objUrl.create(req.body, id, req.params.idPage);
                return (0, httpr_1.success)(res, 201, {
                    msg: "Pagina ha sido creada de forma satisfactoria",
                    success: true,
                    data: null
                });
            }
            catch (err) {
                const error = err;
                console.log(error);
                if (error instanceof page_error_1.VoidData) {
                    return (0, httpr_1.errorRes)(res, 400);
                }
                return (0, httpr_1.errorRes)(res, 500, {
                    msg: "Error interno del servidor",
                    succes: false
                });
            }
        });
    }
    static deletePage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.data;
                const { idPage } = req.params;
                console.log(idPage);
                console.log(id);
                yield Pages.objUrl.delete(idPage, id);
                return (0, httpr_1.success)(res, 204);
            }
            catch (err) {
                const error = err;
                if (error instanceof page_error_1.VoidData) {
                    return (0, httpr_1.errorRes)(res, 400);
                }
                (0, httpr_1.errorRes)(res, 500, {
                    msg: "Error interno del servidor",
                    succes: false
                });
            }
        });
    }
}
exports.Pages = Pages;
Pages.objConnect = mysql_1.Mysql.SINGLETON();
Pages.objUrl = new page_service_1.UrlService;
