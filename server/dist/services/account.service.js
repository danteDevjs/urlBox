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
exports.Account = void 0;
const user_repo_1 = require("../repository/user.repo");
const jwt_1 = require("../libs/jwt");
class Account {
    constructor() {
        this.objRepoUser = new user_repo_1.UserRepo;
    }
    login(dataUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenUser = yield jwt_1.Jwt.sign({
                id: dataUser.idUser,
                username: dataUser.username,
                typeUser: dataUser.typeUser
            });
            return tokenUser;
        });
    }
}
exports.Account = Account;
