import ResponseAsk from "../Entities/Response";
import { ResponseRepository } from "../Repository/ResponseRepository";

class ResponseService {

    private responseRepository: ResponseRepository = new ResponseRepository();

    constructor(){

    }

    async saveResponse(body: string, idAsk: number): Promise<ResponseAsk> {
        return await this.responseRepository.saveResponse(body, idAsk);
    }

    async listAllResponses(): Promise<Array<ResponseAsk>> {
        return await this.responseRepository.listAllResponses();
    }

    async listOneResponse(id: number): Promise<ResponseAsk|null> {
        return await this.responseRepository.listOneResponse(id);
    }

}

export { ResponseService }