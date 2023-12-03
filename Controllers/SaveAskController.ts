import { Request, Response } from "express";
import ModelAsk from "../Models/ModelAsk";

interface AskProps{
    titulo: string,
    descricao: string
}

class SaveAskController{

    async SaveAsk(req: Request, res: Response): Promise<any> {
        try{
            const { titulo, descricao }: AskProps = req.body;
            const ask = await ModelAsk.create({ titulo, descricao });
            res.redirect("/");
        }catch(err){
            console.log(err);
            res.redirect("/perguntar");
        }
    }

}

export { SaveAskController }