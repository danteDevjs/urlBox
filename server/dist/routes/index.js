"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApi = void 0;
const express_1 = require("express");
const pages_routes_1 = __importDefault(require("./pages.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const login_routes_1 = __importDefault(require("./login.routes"));
function routerApi(app) {
    const route = (0, express_1.Router)();
    app.use('/api/v1', route);
    route.use("/user", user_routes_1.default);
    route.use("/pages", pages_routes_1.default);
    route.use("/account", login_routes_1.default);
}
exports.routerApi = routerApi;
