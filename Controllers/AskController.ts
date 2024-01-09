import { Request, Response } from "express";
import Ask from "../Entities/Ask";
import ResponseAsk from "../Entities/Response";
import { AskService } from "../Services/AskService";
import { ResponseService } from "../Services/ResponseService";

class AskController {

    private askService: AskService = new AskService()
    private responseService: ResponseService = new ResponseService();

    constructor(){

    }

    async listAllAsk(req: Request, res: Response) {
        try {
            const asks: Array<Ask> = await this.askService.listAllAsks();

            const responses: Array<ResponseAsk> = await this.responseService.listAllResponses();

            res.status(200).json({asks, responses})
        } catch(err) {
            res.status(404).json({error: err})
        }
    }

    async saveAsk(req: Request, res: Response) {
        try {
            const { title, description } = req.body;

            const saveAsk: Ask = await this.askService.saveAsk(title, description);
            
            res.status(201).json({saveAsk})
        } catch(err) {
            res.status(400).json({error: err});
        }
    }

    async listOneAsk(req: Request, res: Response) { 
        const { id } = req.params;

        const ask: Ask|null = await this.askService.listOneAsk(parseInt(id));

        if(!ask){
            return res.status(404).json({error: "Not found a Ask by ID"})
        }

        res.status(200).json({ask});
    }    

}

export { AskController }