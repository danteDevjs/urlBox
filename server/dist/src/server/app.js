"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
require("dotenv/config");
const configuration_1 = require("../../config/configuration");
const express_2 = require("express");
class Server {
    constructor() {
        this.PORT = configuration_1.environment.PORT;
        this.app = (0, express_1.default)();
        this.serverUp();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)({
            origin: "*",
            methods: "get, post, put, delete",
            credentials: true
        }));
        this.app.use((0, morgan_1.default)("dev"));
    }
    routes() {
        const router = (0, express_2.Router)();
        router.get("/", (req, res) => res.json({ msg: "hola mundo" }));
        this.app.use(router);
    }
    serverUp() {
        console.log(this.PORT);
        this.app.listen(3005, () => console.log(`http://localhost:${3005}`));
    }
}
exports.Server = Server;
