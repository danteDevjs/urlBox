import { Router } from "express";
import { Pages } from "../controllers/pages.controller";
const route = Router();
import { validatePages} from "../middlewares/validators/pages.validator";
import { validatePage } from "../middlewares/pages.midd";
import { authorization } from "../middlewares/authorization.mid";


route.get("/list", authorization, Pages.list);
route.post("/save/:idPage", authorization, validatePages, validatePage, Pages.save);
route.get("/delete/:idPage", authorization, Pages.deletePage);

export default route;