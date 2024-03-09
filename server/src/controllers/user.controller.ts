import { Request, Response } from "express";
import { UserServices } from "../services/user.service";
import { success, errorRes } from "../adapters/http/httpr";
import { UserError } from "../custom-error/user.error";


export class UserController{

    static objUserService = new UserServices;

    static async listUser(req:Request, res:Response){

      try{

        const dataUser = await UserController.objUserService.readUser();
        success(res, 200, {
            msg: "Data de usuario", 
            success: true, 
            data: dataUser
        });


      }catch(err){
        
        let error = err as Error;
        console.log(error);

        if(error instanceof UserError && error.name === "EmptyUsers"){
            
            return errorRes(res, 404, {
                msg: error.message,
                succes: false
            });
        }

        return errorRes(res, 500, {
            msg: "Error interno del servidor",
            succes: false
        });
      }
    
    }
    static async listUserOne(req:any, res:Response){

        try{
            
          const {username} = req.data;
          const dataUser = await UserController.objUserService.readUserOne(username);
          
          return success(res, 200, {
              msg: "Data de usuario", 
              success: true, 
              data: dataUser
          });
  
  
        }catch(err){
          
            let error = err as Error;
            console.log(error);

            if(error instanceof UserError && error.name === "EmptyUser"){
                
                return errorRes(res, 404, {
                    msg: error.message,
                    succes:false 
                });
            }

            return errorRes(res, 500, {
                msg: "Error interno del servidor",
                succes: false
            });
        }
      
      }

    static async createUser(req:Request, res:Response){

        try{

            await UserController.objUserService.createUser(req.body);

            return success(res, 201, {
                msg: "El usuario se ha creado correctamente", 
                success: true, 
                data: null
            });
    

        }catch(err:any){
            console.log(err);
            let error = err as Error;
       
            if(error instanceof UserError && error.name === "NotRow"){
                
                return errorRes(res, 400, {
                    msg: error.message,
                    succes: false 
                });
            }
            
            if(error.message.slice(0, 15) === "Duplicate entry"){
                return errorRes(res, 409, {
                    msg: "Usuario ya existe en base de datos",
                    succes: false
                });
            }
           
            return errorRes(res, 500, {
                msg:  "Error interno del servidor",
                succes:false
            });
        
        }

    }

    static async deleteUser(req:Request, res:Response){

       try{
        await UserController.objUserService.deleteUser(req.params.idUser);
        
        return success(res, 204);

       }catch(err:any){

        let error = err as Error;
   
        console.log(error);
        if(error instanceof UserError && error.name === "NotDelete"){
            
            return errorRes(res, 500, {
                msg: error.message,
                succes: false
            });
        }
       
        return errorRes(res, 500, {
            msg: "Error interno del servidor",
            succes: false
        });
    
    }

    }

    static async deleteLogicUser(req:Request, res:Response){

        try{
            
         await UserController.objUserService.deleteLogicUser(req.params.idUser);
         
         return success(res, 204);
 
        }catch(err:any){
 
         let error = err as Error;
    
         console.log(error);
         if(error instanceof UserError && error.name === "NotDelete"){
             
             return errorRes(res, 500, {
                 msg: error.message,
                 succes: false
             });
         }
        
         return errorRes(res, 500, {
             msg: "Error interno del servidor",
             succes: false
         });
     
     }
    }

    static async updateUser(req:Request, res:Response){

        try{

            await UserController.objUserService.updateUser(req.body, req.params.idUser);

            return success(res, 200, {
                msg: "El usuario se ha actualizado correctamente", 
                success: true, 
                data: null
            });
    

        }catch(err:any){

            let error = err as Error;
       
            console.log(error);
            if(error instanceof UserError && error.name === "NotUpdate"){
                
                return errorRes(res, 500, {
                    msg:error.message,
                    succes: false
                });
            }
            
            if(error.message.slice(0, 15) === "Duplicate entry"){
                return errorRes(res, 409, {
                    msg: "Usuario ya existe en base de datos",
                    succes: false
                });
            }
           
            return errorRes(res, 500, {
                msg: "Error interno del servidor",
                succes: false
            });
        
        }

    }
}