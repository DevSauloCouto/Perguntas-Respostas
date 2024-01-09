import { Request, Response } from "express";
import { ResponseService } from "../Services/ResponseService";
import ResponseAsk from "../Entities/Response";

class ResponseController {

    private responseService: ResponseService = new ResponseService()

    async saveResponse(req: Request, res: Response) {
        try {
            const { body, idAsk } = req.body

            const response: ResponseAsk = await this.responseService.saveResponse(body, idAsk);

            res.status(201).json({response})
        } catch (err) {
            res.status(400).json({error: err});
        }
    }

    async listAllResponses(req: Request, res: Response) {
        try {
            const allResponses = await this.responseService.listAllResponses();

            res.status(200).json({allResponses})
        } catch(err) {
            res.status(404).json({error: err})
        }
    }

    async listOneResponse(req: Request, res: Response) {
        const { id } = req.params;
        const response: ResponseAsk|null = await this.responseService.listOneResponse(parseInt(id));

        if(!response) {
            return res.status(404).json({error: "Not found Response by ID"});
        }

        res.status(200).json({response});
    }


}

export { ResponseController }