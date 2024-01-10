import ResponseAsk from "../Entities/Response";

class ResponseRepository {

    constructor() {

    }

    async save(body: string, idAsk: number): Promise<ResponseAsk> {
        return await ResponseAsk.create({body, idAsk});
    }

    async findAll(): Promise<Array<ResponseAsk>> {
        return await ResponseAsk.findAll({ raw: true, attributes: ['body', 'idAsk', 'createdAt'] })
    }

    async findById(id: number): Promise<ResponseAsk|null> {
        return await ResponseAsk.findOne({ where: { id: id } })
    }

}

export { ResponseRepository }