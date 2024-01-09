import ResponseAsk from "../Entities/Response";

class ResponseRepository {

    constructor() {

    }

    async saveResponse(body: string, idAsk: number): Promise<ResponseAsk> {
        return await ResponseAsk.create({body, idAsk});
    }

    async listAllResponses(): Promise<Array<ResponseAsk>> {
        return await ResponseAsk.findAll({ raw: true, attributes: ['body', 'idAsk', 'createdAt'] })
    }

    async listOneResponse(id: number): Promise<ResponseAsk|null> {
        return await ResponseAsk.findOne({ where: { id: id } })
    }

}

export { ResponseRepository }