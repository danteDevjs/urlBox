import { body, query } from "express-validator";
import { UserRepo } from "../../repository/user.repo";


const objUserRepo = new UserRepo;


export const userValidations = [

    body("username")
    .isString().withMessage("Debe ser una cadena de caracteres")
    .notEmpty().withMessage("EL username no debe venir vacio")
    .isLength({min: 3}).withMessage("EL username debe tener un minimo de 3 caracters"),
    body("password")
    .isString().withMessage("Debe ser una cadena de caracteres")
    .notEmpty().withMessage("La password no debe venir vacio")
    .isLength({min:6}).withMessage("La password debe tener un minimo de 6 caracteres"),
    
]

export const userQuery = [
    
    query("username")
    .isString().withMessage("Debe ser una cadena de caracteres")
    .notEmpty().withMessage("EL username no debe venir vacio"),
    query("password")
    .isString().withMessage("Debe ser una cadena de caracteres")
    .notEmpty().withMessage("La password no debe venir vacio")
  
]