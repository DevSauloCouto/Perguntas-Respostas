import { Dialect, Sequelize } from "sequelize";

interface ConfigHostDialect {
    host: string;
    dialect: Dialect;
}

class DataBaseConfiguration {
    private static SEQUELIZE: Sequelize;

    public static async authDataBase(): Promise<void> {
        try{
            await this.SEQUELIZE.authenticate();
            console.log("Connection Database Success");
        }catch(err){
            console.log(err);
        }
    }

    public static getSequelize(): Sequelize {
        return this.SEQUELIZE;
    }

    public static instanceSequelize(database: string, user: string, password: string, hostAndDialect: ConfigHostDialect): Sequelize {
        this.SEQUELIZE = new Sequelize(database, user, password, hostAndDialect)
        return this.SEQUELIZE;
    }

}

export { DataBaseConfiguration };
