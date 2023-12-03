import { Request, Response } from "express";
import ModelAsk from "../Models/ModelAsk";
import ModelResponse from "../Models/ModelResponse";

class ListAskController{

    async ListAllAsks(req: Request, res: Response): Promise<any> {
        try{
            const asks = await ModelAsk.findAll({ raw: true, order:[['id','DESC']] });

            if(!asks){
                return res.status(404).json({ message: "Not Found Ask" });
            }

            const responses = await ModelResponse.findAll({  attributes: ['idAsk','body'], raw: true })
            res.render("index", { perguntas: asks, response: responses });
        }catch(err){
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

}

export { ListAskController };