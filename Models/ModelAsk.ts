import { DataTypes, Model } from "sequelize";
import { DataBase } from "../MySQL/index";

const { database } = new DataBase();
database
    .sync()
    .then(() => {
        console.log("Table Syncron Success")
    })
    .catch(error => {
        console.log(`Not Success => ${error}`)
    })

class ModelAsk extends Model{
    public titulo!: string;
    public descricao!: string;
}

ModelAsk.init(
    {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[\S*]/g
            }
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                is: /^[\S*]/g
            }
        }
    },
    {
        sequelize: database,
        tableName: "perguntas"
    }
);

export default ModelAsk