import { Dialect, Sequelize } from "sequelize";

interface ConfigHostDialect {
    host: string;
    dialect: Dialect;
}

class DataBaseConfiguration {
    private SEQUELIZE: Sequelize;

    constructor(database: string, user: string, password: string, hostAndDialect: ConfigHostDialect){
        this.SEQUELIZE = new Sequelize(database, user, password, hostAndDialect);
    }

    public async authDataBase(): Promise<void> {
        try{
            await this.SEQUELIZE.authenticate();
            console.log("Connection Database Success");
        }catch(err){
            console.log(err);
        }
    }

    public getSequelize(): Sequelize {
        return this.SEQUELIZE;
    }

}

export { DataBaseConfiguration };
