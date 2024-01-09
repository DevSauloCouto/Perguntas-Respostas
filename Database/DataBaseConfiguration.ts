import { Dialect, Sequelize } from "sequelize";

interface ConfigHostDialect {
    host: string;
    dialect: Dialect;
}

class DataBaseConfiguration {
    private sequelize: Sequelize;

    constructor(database: string, user: string, password: string, hostAndDialect: ConfigHostDialect){
        this.sequelize = new Sequelize(database, user, password, hostAndDialect)
    }

    async authDataBase(): Promise<void> {
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
