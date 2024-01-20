import express, { Application } from "express";
import { routes } from "./routes";
import bodyParser from "body-parser";
import { DataBase } from "./Database/DataBase";

class App {
    
    private server: Application;
    private port: number = 8080;

    constructor(){
        this.server = express();
        this.listenServer();
        this.configBodyParser();
        this.useRoutes();
    }

    public listenServer(): void {
        this.server.listen(this.port, () => console.log("Server Running"))
    }

    public configBodyParser(): void {
        this.server.use(bodyParser.urlencoded({extended: false}));
        this.server.use(bodyParser.json());
    }

    public useRoutes(): void {
        this.server.use(routes);
    }

}

const database = new DataBase("guiaperguntas", "root", "admin#$SL", {host: "localhost", dialect: "mysql"});

database.connect();

const application = new App();
