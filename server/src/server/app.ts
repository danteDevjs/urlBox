import express, { Application } from "express";
import cors from 'cors';
import morgan from "morgan";
import "dotenv/config"
import { Mysql } from "../databases/mysql";
import cookieParser from "cookie-parser";

import { environment } from "../config/configuration";
import { routerApi } from "../routes";

export class Server{

    private app:Application;
    private PORT:number;

    constructor(){

        this.PORT = environment.PORT;
        this.app = express();


        this.database();
        this.serverUp();
        this.middlewares();
        this.routes();
       
    }   

    public async database(){
        const objMysql = Mysql.SINGLETON();
        await objMysql.createInstance();
       await  objMysql.connection();
    }

    public middlewares(){
        
        this.app.use(cookieParser());
        this.app.use(express.json());
        this.app.use(cors({
            origin: ["http://localhost:5173", "http://localhost:5173/home"],
            methods: "get, post, put, delete",
            credentials: true,
        }));
      
        this.app.use(morgan("dev"));

    }

    public routes(){

        routerApi(this.app);
    }

    public serverUp(){
        console.log(this.PORT);
        this.app.listen(this.PORT, ()=> console.log(`http://localhost:${this.PORT}`));
    }

}