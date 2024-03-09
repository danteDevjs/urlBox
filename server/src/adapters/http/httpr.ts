import { Response } from "express";

interface BodyRes{
    msg:string, 
    success: boolean, 
    data: {} | null,
    status? :number
}


interface BodyResErr<T>{
    msg:T, 
    succes: boolean;
    status? :number
}
export const success = (res:Response, status:number, body?:BodyRes) => res.status(status).json(body);

export function errorRes<T>(res:Response, status:number, body?:BodyResErr<T>){
    res.status(status).json(body);
}

