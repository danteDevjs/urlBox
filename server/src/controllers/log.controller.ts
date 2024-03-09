import { Request, Response } from "express";
import { Account } from "../services/account.service";
import { errorRes, success } from "../adapters/http/httpr";

export class LogController{

    static objAccount = new Account;

    static async login(req:any, res:Response){

        try{

            const token = await LogController.objAccount.login(req.dataUser);
            
            res.cookie('bearerToken', token, {
                httpOnly: false
            });
            
            success(res, 200, {
                
                msg: "usuario autenticado", 
                success:true, 
                data: null
            })
        
        }catch(err){
            const error = err as Error;

            console.log(error);
            errorRes(res, 500, {

                msg: "Error interno del servidor",
                succes: false
            });
        }
    }

    static async logout(){

    }

}