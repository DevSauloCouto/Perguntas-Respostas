import { Sequelize } from "sequelize";

class DataBase{
    database: Sequelize;

    constructor(){
        this.database = new Sequelize("guiaperguntas", "root", "admin#$SL", {host: "localhost", dialect: "mysql"})
    }

    async Auth(): Promise<void> {
        try{
            await this.database.authenticate();
            console.log("Connection Database Success");
        }catch(err){
            console.log(err);
        }
    }

}

export { DataBase };