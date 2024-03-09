"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbsConfig = exports.environment = void 0;
exports.environment = {
    PORT: parseInt(process.env.PORT) || 3000,
    SECRET_JWT: process.env.SECRET_JWT
};
exports.dbsConfig = {
    database: process.env.DBS,
    password: process.env.PASS,
    host: process.env.HOST,
    user: process.env.USE
};
