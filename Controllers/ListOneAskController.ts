import { Request, Response } from "express";
import ModelAsk from "../Models/ModelAsk";
import ModelResponse from "../Models/ModelResponse";

class ListOneAskController{

    async ListOneAsk(req: Request, res: Response): Promise<any> {
        try{
            const { id } = req.params;
            const oneAsk = await ModelAsk.findOne({ where: { id } });

            if(!oneAsk){
                return res.status(404).json({ message: "Not Found Ask" });
            } 

            const responseToAsk = await ModelResponse.findAll({ where: { idAsk: id }, order: [['id','DESC']] });
            res.render("idPergunta", { pergunta: oneAsk, responses: responseToAsk });
        }catch(err){
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    
}

export { ListOneAskController };