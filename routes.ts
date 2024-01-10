import { Router, Request, Response } from "express";
import { AskController } from "./Controllers/AskController";
import { ResponseController } from "./Controllers/ResponseController";

const routes: Router = Router();


routes.get("/api/ask-response", async (req: Request, res: Response) => {
    return await new AskController().listAllAsks(req, res)
})

routes.get("/api/ask/:id", async (req: Request, res: Response) => {
    return await new AskController().listOneAsk(req, res)
})

routes.post("/api/ask", async (req: Request, res: Response) => {
    return await new AskController().saveAsk(req, res);
})

routes.post("/api/response", async (req: Request, res: Response) => {
    return await new ResponseController().saveResponse(req, res);
})

routes.get("/api/response/:id", async (req: Request, res: Response) => {
    return await new ResponseController().listOneResponse(req, res);
})

export { routes };