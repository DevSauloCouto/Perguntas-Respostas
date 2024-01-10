import express from "express";
import { routes } from "./routes";
import bodyParser from "body-parser";
import { DataBaseConfiguration } from "./Database/DataBaseConfiguration";

class App {
    
    private static server: express.Application = express();
    private static port: number = 80;

    public static listenServer(): void {
        App.server.listen(App.port, () => console.log("Server Running"))
    }

    public static configBodyParser(): void {
        App.server.use(bodyParser.urlencoded({extended: false}));
        App.server.use(bodyParser.json());
    }

    public static useRoutes(): void {
        App.server.use(routes);
    }

}

DataBaseConfiguration.instanceSequelize("guiaperguntas", "root", "admin#$SL", {host: "localhost", dialect: "mysql"})
DataBaseConfiguration.authDataBase();

App.listenServer();
App.configBodyParser()
App.useRoutes()