import { DataTypes, Model, Sequelize } from "sequelize";
import { DataBaseConfiguration } from "../Database/DataBaseConfiguration";

const database: Sequelize = DataBaseConfiguration
                                .instanceSequelize("guiaperguntas", "root", "admin#$SL", {host: "localhost", dialect: "mysql"})

DataBaseConfiguration.getSequelize()
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
        sequelize: database,
        tableName: "tb_ask"
    }
)

export default Ask