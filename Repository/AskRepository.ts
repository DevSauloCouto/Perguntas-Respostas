import Ask from "../Entities/Ask";

class AskRepository {

    constructor(){

    }

    async saveAsk(title: string, description: string): Promise<Ask> {
        return await Ask.create({title, description})
    }

    async listAllAsks(): Promise<Array<Ask>> {
        return await Ask.findAll({ raw: true, order: [['id', 'DESC']], attributes: ['id', 'title', 'description', 'createdAt'] })
    }

    async listOneAsk(id: number): Promise<Ask|null> {
        return await Ask.findOne({ where: { id: id } });
    }



}

export { AskRepository }