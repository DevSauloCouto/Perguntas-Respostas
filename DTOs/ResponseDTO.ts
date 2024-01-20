class ResponseDTO {

    private body: string;
    private idAsk: number;

    constructor(body: string, idAsk: number){
        this.body = body;
        this.idAsk = idAsk;
    }

    public getBody(): string {
        return this.body;
    }

    public getIdAsk(): number {
        return this.idAsk;
    }

}

export { ResponseDTO };