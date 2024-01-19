import { Sequelize } from "sequelize";

class DataBaseConfiguration {
    private sequelize: Sequelize;

    constructor(){
        this.sequelize = new Sequelize("guiaperguntas", "root", "admin#$SL", {host: "localhost", dialect: "mysql"});
    }

    public async authDataBase(): Promise<void> {
        try{
            await this.sequelize.authenticate();
            console.log("Connection Database Success");
        }catch(err){
            console.log(err);
        }
    }

    public getSequelize(): Sequelize {
        return this.sequelize;
    }

}

export { DataBaseConfiguration };
