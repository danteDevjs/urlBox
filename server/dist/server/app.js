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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
require("dotenv/config");
const mysql_1 = require("../databases/mysql");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const configuration_1 = require("../config/configuration");
const routes_1 = require("../routes");
class Server {
    constructor() {
        this.PORT = configuration_1.environment.PORT;
        this.app = (0, express_1.default)();
        this.database();
        this.serverUp();
        this.middlewares();
        this.routes();
    }
    database() {
        return __awaiter(this, void 0, void 0, function* () {
            const objMysql = mysql_1.Mysql.SINGLETON();
            yield objMysql.createInstance();
            yield objMysql.connection();
        });
    }
    middlewares() {
        this.app.use((0, cookie_parser_1.default)());
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)({
            origin: ["http://localhost:5173", "http://localhost:5173/home"],
            methods: "get, post, put, delete",
            credentials: true,
        }));
        this.app.use((0, morgan_1.default)("dev"));
    }
    routes() {
        (0, routes_1.routerApi)(this.app);
    }
    serverUp() {
        console.log(this.PORT);
        this.app.listen(this.PORT, () => console.log(`http://localhost:${this.PORT}`));
    }
}
exports.Server = Server;
