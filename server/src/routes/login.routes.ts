import {Router} from "express";
import { LogController } from "../controllers/log.controller";
import { authenticate } from "../middlewares/authenticate.mid";
import { userQuery, userValidations } from "../middlewares/validators/user.validation";
import { validateUser } from "../middlewares/user.mid";
const route = Router();

route.get("/login", userQuery, validateUser,authenticate, LogController.login);

export default route;