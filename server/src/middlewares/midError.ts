import { NextFunction, Request, Response } from "express";

export function handleErrors(err:Error, req:Request, res:Response, next:NextFunction){

    console.log(err);
    res.status(500).json("error en el servidor");
   
}