import { AskDTO } from "../DTOs/AskDTO";
import Ask from "../Entities/Ask"
import { AskRepository } from "../Repository/AskRepository"

class AskService {
    private askRepository: AskRepository = new AskRepository();

    constructor() {

    }


    async save({title, description}: AskDTO): Promise<Ask> {
        return await this.askRepository.save(title, description);
    }

    async findAll(): Promise<Array<Ask>> {
        return await this.askRepository.findAll();
    }

    async findById(id: number): Promise<Ask | null> {
        return await this.askRepository.findById(id);
        
    }

}

export { AskService }