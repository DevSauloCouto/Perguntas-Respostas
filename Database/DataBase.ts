import { Dialect, Sequelize } from "sequelize";

interface HostAndDialect {
    host: string;
    dialect: Dialect;
}

class DataBase {

    private database: Sequelize;

    constructor(database: string, user: string, password: string, hostAndDialect: HostAndDialect){
        this.database = new Sequelize(database, user, password, hostAndDialect);
    }

    public async connect(): Promise<void> {
        try{
            await this.database.authenticate();
            console.log("Connection Database Success");
        }catch(err){
            console.log(err);
        }
    }

    public getDatabase(): Sequelize {
        return this.database;
    }

}

export { DataBase };
