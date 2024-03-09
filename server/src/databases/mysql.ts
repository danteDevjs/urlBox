import mysql2 from "mysql2/promise";
import { dbsConfig } from "../config/configuration";
import "dotenv/config"

export class Mysql{

    static objMysqlConnection:mysql2.Connection;
    static objMysql:Mysql;  


    private constructor(){}

    public static SINGLETON(){

        if(!Mysql.objMysql){
            Mysql.objMysql = new Mysql();
        }

        return Mysql.objMysql;
    }
    
    public async createInstance(){

        Mysql.objMysqlConnection = await mysql2.createConnection({
            user: dbsConfig.user,
            database: dbsConfig.database,
            host: dbsConfig.host,
            password: dbsConfig.password,
        });

    }

  
    public async connection(){
        try{

            const infoConnect = await Mysql.objMysqlConnection.connect()
            console.log("Conexion creada");

        }catch(err){

            console.log("Error de conexion");
            console.log(err);
        }
    }


    public async mysqlQuerys<T>(querys:string, format?:Array<T>){
            return await Mysql.objMysqlConnection.query(querys, format);
    }


}