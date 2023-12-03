import { Router, Request, Response } from "express";
import { ListAskController } from "./Controllers/ListAskController";
import { SaveResponseController } from "./Controllers/SaveResponseController";
import { SaveAskController } from "./Controllers/SaveAskController";
import { ListOneAskController } from "./Controllers/ListOneAskController";

class RoutesApp{
    
    router: Router;

    constructor(){
        this.router = Router();
    }

}

const routes: Router = new RoutesApp().router;


routes.get("/", async (req: Request, res: Response) => {
    return await new ListAskController().ListAllAsks(req, res);
})

routes.get("/perguntar", (req: Request, res: Response) => {
    res.render("perguntar");
})

routes.get("/pergunta/:id", async (req: Request, res: Response) => {
    return await new ListOneAskController().ListOneAsk(req, res)
})

routes.post("/save-ask", async (req: Request, res: Response) => {
    return await new SaveAskController().SaveAsk(req, res);
})

routes.post("/save-response", async (req: Request, res: Response) => {
    return await new SaveResponseController().SaveResponse(req, res);
})

export { routes };