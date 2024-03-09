import jwt from "jsonwebtoken";
import { environment } from "../config/configuration";

export class Jwt{

    public static sign(payload:{id:number, username:string,  typeUser:string}){

        return new Promise((resolve, reject)=>{
            
            jwt.sign(payload, environment.SECRET_JWT,{expiresIn: '40m'}, (err, token)=>{

                if(err){
                    console.log(err);
                    reject("Error la generar el token");
                }
                resolve(token);
            });
        })
        
    }

    public static decode(token:string){

        return new Promise((resolve, reject)=>{
            jwt.verify(token, environment.SECRET_JWT, (err, data)=>{
                if(err){
                    reject(err);
                }
                resolve(data);
            });
        });

    }

}