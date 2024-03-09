"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configuration_1 = require("../config/configuration");
class Jwt {
    static sign(payload) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.sign(payload, configuration_1.environment.SECRET_JWT, { expiresIn: '40m' }, (err, token) => {
                if (err) {
                    console.log(err);
                    reject("Error la generar el token");
                }
                resolve(token);
            });
        });
    }
    static decode(token) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, configuration_1.environment.SECRET_JWT, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}
exports.Jwt = Jwt;
