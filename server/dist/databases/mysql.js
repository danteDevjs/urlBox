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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mysql = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const configuration_1 = require("../config/configuration");
require("dotenv/config");
class Mysql {
    constructor() { }
    static SINGLETON() {
        if (!Mysql.objMysql) {
            Mysql.objMysql = new Mysql();
        }
        return Mysql.objMysql;
    }
    createInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            Mysql.objMysqlConnection = yield promise_1.default.createConnection({
                user: configuration_1.dbsConfig.user,
                database: configuration_1.dbsConfig.database,
                host: configuration_1.dbsConfig.host,
                password: configuration_1.dbsConfig.password,
            });
        });
    }
    connection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const infoConnect = yield Mysql.objMysqlConnection.connect();
                console.log("Conexion creada");
            }
            catch (err) {
                console.log("Error de conexion");
                console.log(err);
            }
        });
    }
    mysqlQuerys(querys, format) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Mysql.objMysqlConnection.query(querys, format);
        });
    }
}
exports.Mysql = Mysql;
