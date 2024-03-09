import { Application } from "express";
import { Router } from "express";
import pageRouter from "./pages.routes";
import userRouter from "./user.routes";
import loggRouter from "./login.routes";

export function routerApi(app:Application){

    const route = Router();
    app.use('/api/v1', route);

    route.use("/user", userRouter);
    route.use("/pages", pageRouter);
    route.use("/account", loggRouter);
}