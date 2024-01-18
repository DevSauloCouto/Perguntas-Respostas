import { Request, Response } from "express";
import Ask from "../Entities/Ask";
import { AskService } from "../Services/AskService";
import { AskDTO } from "../DTOs/AskDTO";

class AskController {

    private askService: AskService = new AskService();

    constructor(){

    }

    async listAllAsks(req: Request, res: Response) {
        try {
            const asks: Array<Ask> = await this.askService.findAll();

            res.status(200).json({asks})
        } catch(err) {
            res.status(404).json({error: err})
        }
    }

    async saveAsk(req: Request, res: Response) {
        try {
            const { title, description } = req.body;

            const ask: Ask = await this.askService.save(new AskDTO(title, description))

        } catch (err) {
            return res.status(400).json({error: err})
        }
    }

    async listOneAsk(req: Request, res: Response) { 
        const { id } = req.params;

        const ask: Ask | null = await this.askService.findById(parseInt(id));

        if(!ask){
            return res.status(404).json({error: "Not found a Ask by ID"})
        }

        res.status(200).json({ask});
    }    

}

export { AskController }