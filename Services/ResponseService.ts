import ResponseAsk from "../Entities/Response";
import { ResponseRepository } from "../Repository/ResponseRepository";

class ResponseService {

    private responseRepository: ResponseRepository = new ResponseRepository();

    constructor(){

    }

    async save(body: string, idAsk: number): Promise<ResponseAsk> {
        return await this.responseRepository.save(body, idAsk);
    }

    async findAll(): Promise<Array<ResponseAsk>> {
        return await this.responseRepository.findAll();
    }

    async findById(id: number): Promise<ResponseAsk|null> {
        return await this.responseRepository.findById(id);
    }

}

export { ResponseService }