import { hashPassword } from "../libs/bcryptjs";
import { UserRepo } from "../repository/user.repo";
import { Useri, User, ResultSetHeader } from "../models/interfaces";
import { UserError } from "../custom-error/user.error";



export class UserServices{

    private objRepo:UserRepo;

    constructor(){
        this.objRepo = new UserRepo;
    }

    async readUser(){

        let resQuery:unknown = await this.objRepo.readUsers();

        let dataQuery = resQuery as Useri[];
        if(dataQuery.length === 0) throw new UserError("no hay datos de usuarios", "EmptyUsers");
        
        
        return dataQuery[0];
    }


    async readUserOne(username:string){

        let resQuery:any = await this.objRepo.readUser(username);

        let dataQuery = resQuery[0][0] as Useri;
       if(Object.keys(dataQuery).length === 0) throw new UserError("sin datos de usuario", "EmptyUser");


        return dataQuery;
    }


    async createUser(dataUser:User):Promise<number>{

     

        //crear arreglo y hashear password

        const values = Object.values(dataUser);
       const [, password] = values;
       values[1] = await hashPassword(password);


        let resQuery = await this.objRepo.createUser(values);

        let formasraras = resQuery[0] as ResultSetHeader;

        if(formasraras.affectedRows === 0) throw new UserError("no se ha guardado los datos", "NotRow");
        

        return 0;
    }


    async deleteUser(idUser:string):Promise<number>{

       
        let resQuery = await this.objRepo.deleteUser(idUser);

        let validateDe = resQuery[0] as ResultSetHeader;

        if(validateDe.affectedRows === 0) throw new UserError("no se ha borrado la fila", "NotDelete");
        

        return 0;
    
    }
    async deleteLogicUser(idUser:string):Promise<number>{

       
        let resQuery = await this.objRepo.deleteLogicUser(idUser);

        let validateDe = resQuery[0] as ResultSetHeader;

        if(validateDe.affectedRows === 0) throw new UserError("no se ha borrado la fila", "NotDelete");
        

        return 0;
    
    }

    async updateUser(dataUser:User, idUser:string){
           //crear arreglo y hashear password

           const values = Object.values(dataUser);
           const [, password] = values;
           values[1] = await hashPassword(password);
        
           values.push(idUser);
    
            let resQuery = await this.objRepo.updateUser(values);
    
            let formasraras = resQuery[0] as ResultSetHeader;
    
            if(formasraras.affectedRows === 0) throw new UserError("no se ha actualizado los datos, preocure enviar nombre de usuario", "NotUpdate");
            
    
            return 0;
    }
}