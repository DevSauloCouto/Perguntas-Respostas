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

class Ask extends Model {
    private title!: string;
    private description!: string;

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }
}

Ask.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[\S*]/g
            }
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                is: /^[\S*]/g
            }
        }
    },
    {
        sequelize: database.getDatabase(),
        tableName: "tb_ask"
    }
)

export default Ask