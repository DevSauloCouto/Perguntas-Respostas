import { DataTypes, Model } from "sequelize";
import { DataBase } from "../MySQL"; 

const { database } = new DataBase();
database
    .sync()
    .then(() => {
        console.log("Table Syncron Success")
    })
    .catch(error => {
        console.log(`Not Success => ${error}`)
    })

class ModelResponse extends Model{
    public body!: string;
    public idAsk!: number;
}

ModelResponse.init(
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
        sequelize: database,
        tableName: "responses"
    }
);

export default ModelResponse;