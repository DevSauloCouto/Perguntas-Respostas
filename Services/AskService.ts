import Ask from "../Entities/Ask"
import { AskRepository } from "../Repository/AskRepository"

class AskService {
    private askRepository: AskRepository = new AskRepository();

    constructor() {

    }


    async save(title: string, description: string): Promise<Ask|unknown> {
        try {

            return await this.askRepository.save(title, description);
        
        } catch(err){
            return {
                message: "Bad Request, Consult the Documentation",
                status: 400,
                timestamp: new Date(),
                details: err
            };
        }

    }

    async findAll(): Promise<Array<Ask>> {
        return await this.askRepository.findAll();
    }

    async findById(id: number): Promise<Ask|null> {
        return await this.askRepository.findById(id);
        
    }

}

export { AskService }