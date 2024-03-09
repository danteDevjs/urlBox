import { NextFunction, Request, Response } from "express";
import { Jwt } from "../libs/jwt";
import { errorRes } from "../adapters/http/httpr";

export async function authorization(req:any, res:Response, next:NextFunction){

    try{    

    
        const resToken = req.headers.authorization;

        if(!resToken){

            throw new Error("el token no viene");
        }

        const token = resToken.split(" ").pop(); 
        const data = await Jwt.decode(token as string);
        
        req.data = data;

        next();
    }catch(err){
       
        const error = err as Error;
        console.log(error);
        
        console.log("llego");
        if(error.message === "jwt expired"){
            return errorRes(res, 500, {
                msg: "su sesion ha expirado",
                succes: false
            });
        }
        if(error.message.trim() === "invalid signature"){
            return errorRes(res, 500, {
                msg: "Token no valido!!!",
                succes: false
            });
        }


        return errorRes(res, 500, {
            msg: "Error interno del servidor",
            succes: false
        });
    
    }
  
}