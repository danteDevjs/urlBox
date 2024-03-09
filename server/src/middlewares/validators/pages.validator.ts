import { body, param } from "express-validator";
    

export const validatePages = [

    body("namePage")
    .toLowerCase()
    .trim()
    .isString()
    .notEmpty().withMessage("NamePage no debe venir vacio")
    .isLength({min: 2, max: 50}).withMessage("el minimo de caracteres es de 2 y el maximo de 50"),
    body("descriptionPage")
    .toLowerCase()
    .trim()
    .isString()
    .notEmpty().withMessage("descriptionPage no debe venir vacio")
    .isLength({min: 20, max: 130}).withMessage("el minimo de caracteres es de 20 y el maximo de 2000"),
   body("linkPage")
   .notEmpty().withMessage("la url no debe venir vacia")
   .isURL().withMessage("la url no posee el formato correcto"),
   body("category")
   .trim()
   .isString()
   .notEmpty().withMessage("category no debe venir vacio")
   .toLowerCase()

];


export const validateParams = [
    param("idPage")
    .notEmpty().withMessage("Error, debe venir el parametro idPage"), 
    param("idUser")
    .notEmpty().withMessage("Error, debe venir el parametro idUser")

]