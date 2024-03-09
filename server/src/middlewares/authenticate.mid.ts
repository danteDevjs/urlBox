import { ErrorAccount } from "../custom-error/account.error";
import { compPassword } from "../libs/bcryptjs";
import { UserRepo } from "../repository/user.repo";
import { Useri } from "../models/interfaces";
import { NextFunction, Request, Response } from "express";
import { errorRes } from "../adapters/http/httpr";
import { Result } from "express-validator";


export async function authenticate(req:any, res:Response, next:NextFunction){

 try{

    const {username, password} = req.query;

    const objRepoUser = new UserRepo;

    const resData:any = await objRepoUser.readUser(username as string);
  

    if(resData[0].length === 0){
        throw new ErrorAccount("Usuario no existe en la base de datos", "ErrorAccountName");
    }
   
    const dataUser = resData[0][0] as Useri;


    const veifyPassword= await compPassword(password as string, dataUser.password);

    if(!veifyPassword){
        throw new ErrorAccount("La contraseña es incorrecta", "ErrorAccountPassword");
    }

    req.dataUser = dataUser;
    next();
   
 }catch(err){
    const error = err as Error;


    if(error instanceof ErrorAccount && error.name === "ErrorAccountName"){
        return errorRes(res, 404, {
            msg: error.message, 
            succes: false
        } );
    }   
    if(error instanceof ErrorAccount && error.name === "ErrorAccountPassword"){
        return errorRes(res, 400, {
            msg: error.message, 
            succes: false
        } );
    }   

    return errorRes(res, 500, {
        msg: "Error interno del servidor",
        succes: false
    } );

    }
   
}