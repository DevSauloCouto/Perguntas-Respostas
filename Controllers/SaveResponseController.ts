import { Request, Response } from "express";
import ModelResponse from "../Models/ModelResponse";

interface ResponsesProps{
    bodyRes: string,
    perguntaId: number
};

class SaveResponseController{

    async SaveResponse(req: Request, res: Response): Promise<any> {
        try{
            const { bodyRes, perguntaId }: ResponsesProps = req.body;
            const response = await ModelResponse.create({ body: bodyRes, idAsk: perguntaId });
            res.redirect(`/pergunta/${perguntaId}`);
        }catch(err){
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    
}

export { SaveResponseController }