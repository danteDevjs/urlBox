import { Router } from "express";
import { UserController } from "../controllers/user.controller";
const route = Router({caseSensitive: true});
import { userValidations } from "../middlewares/validators/user.validation";
import { validateUser } from "../middlewares/user.mid";
import { authorization } from "../middlewares/authorization.mid";

route.get("/list", UserController.listUser);
route.get("/list/:token", authorization, UserController.listUserOne);
route.post("/save", userValidations, validateUser,UserController.createUser);
route.put("/update/:idUser", userValidations, validateUser,UserController.updateUser);
route.delete("/delete/:idUser", UserController.deleteUser);
route.delete("/deleteL/:idUser", UserController.deleteLogicUser);


export default route;