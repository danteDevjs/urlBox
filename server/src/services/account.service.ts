import { UserRepo } from "../repository/user.repo";
import {  Useri } from "../models/interfaces";
import { compPassword } from "../libs/bcryptjs";
import { Jwt } from "../libs/jwt";


export class Account{

    public objRepoUser;
    constructor(){
        this.objRepoUser = new UserRepo;
    }
    
    public async login(dataUser:Useri){

       const tokenUser  = await  Jwt.sign({

            id: dataUser.idUser, 
            username :dataUser.username, 
            typeUser: dataUser.typeUser

        });

        return tokenUser;
    
    }
}