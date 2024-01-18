class ResponseDTO {

    public body: string;
    public idAsk: number;

    constructor(body: string, idAsk: number){
        this.body = body;
        this.idAsk = idAsk;
    }

}

export { ResponseDTO };