export const environment = {
    PORT: parseInt(process.env.PORT as string) || 3000,
    SECRET_JWT: process.env.SECRET_JWT as string
}
export const dbsConfig = {
    database: process.env.DBS as string, 
    password: process.env.PASS as string, 
    host: process.env.HOST as string,
    user: process.env.USE as string
}