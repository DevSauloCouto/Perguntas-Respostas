import Ask from "../Entities/Ask";

class AskRepository {

    constructor(){

    }

    async save(title: string, description: string): Promise<Ask> {
        return await Ask.create({title, description})
    }

    async findAll(): Promise<Array<Ask>> {
        return await Ask.findAll({ raw: true, order: [['id', 'DESC']], attributes: ['id', 'title', 'description', 'createdAt'] })
    }

    async findById(id: number): Promise<Ask|null> {
        return await Ask.findOne({ where: { id: id } });
    }



}

export { AskRepository }