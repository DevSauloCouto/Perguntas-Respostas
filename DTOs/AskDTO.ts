class AskDTO {

    private title: string;
    private description: string;

    constructor(title: string, description: string){
        this.title = title;
        this.description = description;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

}

export { AskDTO }