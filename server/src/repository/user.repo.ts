import { Mysql } from "../databases/mysql";

export class UserRepo{

    private objMysql:Mysql;


    constructor(){
        this.objMysql = Mysql.SINGLETON();
    }


    public async readUsers(){   
        return await this.objMysql.mysqlQuerys("select idUser, username, password, created, availability, typeUser FROM user");
    }


    public async readUser(idUser:String){
    
        return await this.objMysql.mysqlQuerys("select  idUser, username, password, created, availability, typeUser FROM user WHERE username = ? && availability = 1", [idUser])
    }

    
    public async createUser(dataUser:String[]){

        return await this.objMysql.mysqlQuerys( "INSERT INTO user(username, password) VALUES (?,?)", dataUser);
    }   


    public async deleteUser(idUser:string){

        return await this.objMysql.mysqlQuerys( "DELETE FROM user WHERE idUser = ?", [idUser]);
    }

    public async deleteLogicUser(idUser:string){
        return await this.objMysql.mysqlQuerys( "UPDATE user SET availability = 0 WHERE username = ?", [idUser]);
    }

    public async updateUser(dataUser:String[]){
        return await this.objMysql.mysqlQuerys("UPDATE user SET username = ?, password = ? WHERE username = ?", dataUser);
    }

}