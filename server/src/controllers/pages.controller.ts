import  { Request, Response } from "express";
import { Mysql } from "../databases/mysql";

import { UrlRepo} from "../repository/url.repo";

import { UrlService } from "../services/page.service";

import { success, errorRes } from "../adapters/http/httpr";
import { VoidData } from "../custom-error/page.error";



export class Pages{

    static objConnect =   Mysql.SINGLETON();
    static objUrl = new UrlService;

    static async list(req:any, res:Response){

        try{    
            const {id} = req.data;
            
            const data = await Pages.objUrl.read(id);
        
          
            res.setHeader("Content-Type", "application/json");
            return success(res, 200, {
                msg: "datos de paginas",
                success: true, 
                data: data,
                status: 200
            });


        
        
        }catch(err:unknown){

            const error  = err as Error;
            console.log(error);

            if(error instanceof VoidData){
                return errorRes(res, 404, {
                    msg:"no hay contenido",
                    succes: false,
                    status: 404
                });
            }

            return errorRes(res, 500,{
                msg:"Error interno del servidor",
                succes: false,
                status: 500
            } );

        
        }
    }



    static async save(req:any, res:Response){

        try{
        
            const {id} = req.data;
      
            await Pages.objUrl.create(req.body, id, req.params.idPage);

            return success(res, 201, {

                    msg: "Pagina ha sido creada de forma satisfactoria",
                    success: true,
                    data:null
                }
            );
        
    
        }catch(err:any){


            const error  = err as Error;
            console.log(error);

            if(error instanceof VoidData){
                return errorRes(res, 400);
            }

            return errorRes(res, 500,{
                msg: "Error interno del servidor",
                succes:false
            } );
        }

        
    }


    public static async deletePage(req:any,res:Response){
        
        try{

            const {id} = req.data;
            const {idPage} = req.params;
            console.log(idPage);
            console.log(id);


            await Pages.objUrl.delete(idPage, id);
            return success(res, 204);

        
        }catch(err:unknown){

            const error = err as Error;

            if(error instanceof VoidData){
                return errorRes(res, 400);
            }


            errorRes(res, 500, {
                msg:"Error interno del servidor",
                succes: false
            });
        }
    }

    

}