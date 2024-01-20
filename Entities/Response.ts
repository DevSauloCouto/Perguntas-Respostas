import { DataTypes, Model } from "sequelize";
import { DataBase } from "../Database/DataBase";

const database = new DataBase("guiaperguntas", "root", "admin#$SL", {host: "localhost", dialect: "mysql"});

database.getDatabase()
    .sync()
    .then(() => {
        console.log("Table syncron success")
    }).catch(err => {
        throw new Error(err);
    })

class ResponseAsk extends Model {
    private body!: string;
    private idAsk!: number;

    public getBody(): string {
        return this.body;
    }

    public getIdAsk(): number {
        return this.idAsk;
    }
}

ResponseAsk.init(
    {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                is: /^[\S*]/g
            }
        },
        idAsk: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize: database.getDatabase(),
        tableName: "tb_response"
    }
)

export default ResponseAsk