import bcryptjs from "bcryptjs";


export async function hashPassword(password:string){
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt);
}   

export async function compPassword(pass:string, passSql:string,){
    return await bcryptjs.compare(pass, passSql);
}