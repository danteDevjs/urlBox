import { NextFunction, Request, Response } from "express";
import { PagesError } from "../custom-error/page.error";
import { ValidationError, validationResult, Result } from "express-validator";
import { errorRes
 } from "../adapters/http/httpr";
export function validatePage(req:Request, res:Response, next:NextFunction){

    try{

    const error:Result<ValidationError> = validationResult(req);

    if(!error.isEmpty()){
        
       
       throw new PagesError("Error en la validacion de datos", error);
    }

    next();

    }catch(err:unknown){

        const error = err as Error;
        console.log(error);

        if(error instanceof PagesError){

            return errorRes(res, 400,{
                
                msg: error.validateError,
                succes: false,
                status: 400
 
            } );
            
        }
    }
}