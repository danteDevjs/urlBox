import { Mysql } from "../databases/mysql";

export class UrlRepo{

    private objSql:Mysql;


    constructor(){
        this.objSql = Mysql.SINGLETON();
    }

    public async read(fkUser:string){

        const query:string = `select id_page, name_page, description_page, link_page, category from pages WHERE pk_user = ? && availability = 1 ORDER BY id_page DESC;`;
        const res = await this.objSql.mysqlQuerys(query, [fkUser]);
        return res;

    }
    


    public async create(data:string[], pkUser:string){

    
            const query:string = `INSERT INTO pages (pk_user, name_page, description_page, link_page, category)
            VALUES(?,?,?,?,?)`;
            const resQuery = await this.objSql.mysqlQuerys(query, [pkUser, ...data]);
            return resQuery;
      
    }

    public async delete(idPage:string, idUser:string){

      

        //usar el codigo 204 para este y para update
         const query:string = `DELETE FROM pages WHERE id_page = ? && pk_user = ?`;
         const resQuery = await this.objSql.mysqlQuerys(query, [idPage, idUser]);
         return resQuery;

    
    }


    public async updatePage(data:string[], idPage:string){

       
        const query = `UPDATE pages SET name_page = ?, description_page = ?, link_page = ?, category = ? WHERE id_page = ?`;
        const resQuery = await this.objSql.mysqlQuerys(query, [...data, idPage]);

        return resQuery;

    }   
}