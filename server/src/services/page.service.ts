import { UrlRepo } from "../repository/url.repo";
import { Pagesi, ResultSetHeader } from "../models/interfaces";
import { VoidData } from "../custom-error/page.error";

export class UrlService{

    private objRepo;
    
    constructor(){
        this.objRepo = new UrlRepo;
    }

    public async read(fkUser:string){

        const res = await this.objRepo.read(fkUser);

        const data:Pagesi[] = res[0] as Pagesi[];

        if(data.length === 0){
            throw new VoidData("No hay contenido");
        }

        return data;

    }


    public async create(data:Body, pkUser:string, idPage:string){

        const values:string[] = Object.values(data);
        console.log(idPage);

        
        if(idPage === 'null'){
          
            const resQuery:any = await this.objRepo.create(values, pkUser);

            const pageData = resQuery[0]  as ResultSetHeader;
            if(pageData.affectedRows === 0){
                throw new VoidData("no se ha creado el campo");
            }

            return true;
        }
  
        //update

        
        const  resQuery = await this.objRepo.updatePage(values, idPage);
        const pageData = resQuery[0]  as ResultSetHeader;
        if(pageData.affectedRows === 0){
            throw new VoidData("no se actualiza el campo");
        }

        return true;


    }



    public async delete(idPage:string, idUser:string){

      

    
        const resQuery = await this.objRepo.delete(idPage, idUser);
        const pageData = resQuery[0]  as ResultSetHeader;
        if(pageData.affectedRows === 0){
            throw new VoidData("no se ha aliminado el campo");
        }

        return true;

    }


}