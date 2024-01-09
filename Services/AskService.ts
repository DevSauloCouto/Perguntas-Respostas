import Ask from "../Entities/Ask"
import { AskRepository } from "../Repository/AskRepository"

class AskService {
    private askRepository: AskRepository = new AskRepository();

    constructor() {

    }


    async saveAsk(title: string, description: string): Promise<Ask> {
        return await this.askRepository.saveAsk(title, description)
    }

    async listAllAsks(): Promise<Array<Ask>> {
        return await this.askRepository.listAllAsks();
    }

    async listOneAsk(id: number): Promise<Ask|null> {
        return await this.askRepository.listOneAsk(id);
        
    }

}

export { AskService }