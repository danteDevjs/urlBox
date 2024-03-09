export interface Pagesi{

    id_page: number,
    name_page: string,
    description_page: string,
    link_page: string,
    category: string
}

export interface Body{

    namePage: string,
    descriptionPage: string,
    linkPage: string,
    category: string
}



export interface ResultSetHeader {                                           
    fieldCount: number,                                                 
    affectedRows: number,                                               
    insertId: number,                                                                                
    info: String,                                                       
    serverStatus: number,                                               
    warningStatus: number,                                              
    changedRows: number                                                 
};  


export interface Useri{
    idUser:number,  
    username:string,
    password:string, 
    created:Date, 
    avaibality:Boolean,
    typeUser: string
}



export interface User{
    username:string; 
    password:string;
}

